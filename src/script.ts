import '../assets/styles/style.scss';
import {Meal as MealTemplate} from "./templates/meal";
import {Meal} from "./Entity/meal";
import btn from "./templates/btn";
import seperator from "./templates/seperator";
import {getRandomIngredients, getRandomMeals} from "./database/fetch";
import {addStats} from "./database/insert";
import {addFartSound} from "./gamification/fart";

const gameContainer = document.querySelector('.game-container');


let meals: {meal1: Meal, meal2: Meal} = {
  meal1: undefined,
  meal2: undefined,
};

const mealChoices = async() => {
  const [randomMeals, ing] = await Promise.all([getRandomMeals(), getRandomIngredients()]);

  meals.meal1 = new Meal(
    ing[0][0],
      randomMeals[0],
    ing[0][1]
  );

  meals.meal2 = new Meal(
    ing[1][0],
    randomMeals[1],
    ing[1][1]
  );

  const meal1 = MealTemplate('meal1', meals.meal1);
  meal1.insertAdjacentHTML('beforeend', btn('Choose Meal 1', 'meal-1-trigger', 'meal1'));
  gameContainer.appendChild(meal1);
  gameContainer.insertAdjacentHTML('beforeend', seperator);

  const meal2 = MealTemplate('meal2', meals.meal2);
  meal2.insertAdjacentHTML('beforeend', btn('Choose Meal 2', 'meal-2-trigger', 'meal2'));
  gameContainer.appendChild(meal2);
};

const chooseMealTrigger = () => {
  document.querySelectorAll('.game-container .btn').forEach((trigger) => {
    trigger.addEventListener('click', async() => {
      const mealId = trigger.getAttribute('data-id');
      if(!meals[mealId]) {
        return console.error('Meal not found');
      }

      // fixme
      for(let node of [...gameContainer.children]) {
        if(node.id !== mealId) {
          node.classList.add('fade-out');
          setTimeout(() => node.remove(), 1000);
        }
      }

      addStats(meals[mealId]);
      gameContainer.insertAdjacentHTML('beforeend', btn('Play Again !', '', '', '', 'play-again-btn'));

      const shareBtn = document.createElement('a');
      shareBtn.text = 'Share';
      shareBtn.href = '#';
      shareBtn.classList.add('btn');
      shareBtn.addEventListener('click', (e) => {
        e.preventDefault();
        share(meals[mealId]);
      });

      gameContainer.appendChild(shareBtn);
    });
  });
}

function share(meal: Meal){
  const data = {
    title: 'Ratherizer',
    text: `I'd rather eat ${meal.mealDescriptions[1].ingredient} ${meal.firstContextToken} ${meal.basemeal.descriptor}. What would you rather eat?`,
    url: location.href
  };

  if(typeof navigator.canShare !== 'function' || !navigator.canShare(data)) {
    navigator.clipboard.writeText(`${data.text} ${data.url}`);
    alert('Copied result to clipboard'); // todo make this pretty
  } else {
    navigator.share(data);
  }
}


function addGamification() {
  addFartSound();
}

// document.addEventListener('DOMContentLoaded', async () => {
(async function() {
  if(gameContainer) {
    console.time('Starting');

    addGamification();

    await mealChoices();
    // cardFlip();
    chooseMealTrigger();

    // await addMeals();
    // await addIng();
    console.timeEnd('Starting');
  }
})();
