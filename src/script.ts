import '../assets/styles/style.scss';
import {Meal as MealTemplate} from "./templates/meal";
import {Meal} from "./Entity/meal";
import btn from "./templates/btn";
import seperator from "./templates/seperator";
import {getRandomIngredients, getRandomMeals} from "./database/fetch";
import {addStats} from "./database/insert";
import {addFartSound} from "./gamification/fart";

const gameContainer = document.querySelector('.game-container');


let meals: { meal1: Meal, meal2: Meal } = {
  meal1: undefined,
  meal2: undefined,
};

const mealChoices = async () => {
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

  const mealHtml = (meal: Meal, id: string, btnText: string): HTMLDivElement => {

    const wrapper = document.createElement('div');
    wrapper.id = id;

    const html = MealTemplate(meal);
    html.id = `${id}-container`;

    const chooseMealBtn = btn(btnText, id);
    chooseMealTrigger(chooseMealBtn, meal);

    html.appendChild(chooseMealBtn);

    return html;
  }

  gameContainer.appendChild(mealHtml(meals.meal1, 'meal-1', 'Choose Meal 1'));
  gameContainer.insertAdjacentHTML('beforeend', seperator);
  gameContainer.appendChild(mealHtml(meals.meal2, 'meal-2', 'Choose Meal 2'));
};

const chooseMealTrigger = (chooseMealBtn: HTMLAnchorElement, meal: Meal) => {
  chooseMealBtn.addEventListener('click', async (e: MouseEvent) => {
    const parent = (e.target as HTMLElement).parentNode;
    const siblings = document.querySelectorAll(`.game-container > *:not(#${parent.id})`);

    const hideElems = (className: string) => {
      siblings.forEach(sib => sib.classList.add(className));
      e.target.classList.add(className);
    }

    hideElems('fade-out');
    setTimeout(() => hideElems('hide'), 500);

    addStats(meal);

    const playAgain = btn('Play Again!', 'btn-play-again');
    playAgain.addEventListener('click', clickPlayAgain);

    const shareBtn = btn('Share', '');
    shareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      share();
    });

    gameContainer.appendChild(shareBtn);
    gameContainer.appendChild(playAgain);
  });
}

function clickPlayAgain(): void {
  location.reload();
}

function share() {
  const mealText = [...document.querySelectorAll('.meal-container:not(.hide) .meal-string *')].map(x => x.innerText).join(' ').replace(/\s+/, ' ')

  const data = {
    title: 'Ratherizer',
    text: `I'd rather eat ${mealText}. What would you rather eat?`,
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
    addGamification();
    await mealChoices();
  }
})();
