import './styles/style.scss';

import Meal from "./templates/meal";
import btn from "./templates/btn";
import seperator from "./templates/seperator";
import analytics from "./templates/analytics";
import { getRandomIngredients, getRandomMeals } from "./database/fetch";
import { addStats } from "./database/insert";

const gameConainer = document.querySelector('.game-container');

const afterToken = {
    'sides': 'with a side of',
    'topped': 'topped with',
    'extras': 'topped with',
    'drinks': 'with a side of',
};

let meals = {
    meal1: '',
    meal2: '',
};

const mealChoices = async () => { 
    const [meals, ing] = await Promise.all([ getRandomMeals(), getRandomIngredients()]);


    meals.meal1 = {
        meal: meals[0],
        firstIng: ing[0][0][0],
        secondIng: ing[0][0][1],
        firstToken: meals[0].key == 'stuffed' ? 'stuffed' : '',
        secondToken: afterToken[ing[1][0][0].key],
        thirdIng: ing[1][0][0],
        fourthIng: ing[1][0][1],
    }

    meals.meal2 = {
        meal: meals[1],
        firstIng: ing[0][1][0],
        secondIng: ing[0][1][1],
        firstToken: meals[1].key == 'stuffed' ? 'stuffed' : '',
        secondToken: afterToken[ing[1][1][0].key],
        thirdIng: ing[1][1][0],
        fourthIng: ing[1][1][1],
    }

    Meal('meal1', gameConainer, meals.meal1);
    gameConainer.insertAdjacentHTML('beforeend', btn('Choose Meal 1', 'meal-1-trigger', 'meal1'));
    gameConainer.insertAdjacentHTML('beforeend', seperator);
    Meal('meal2', gameConainer, meals.meal2);
    gameConainer.insertAdjacentHTML('beforeend', btn('Choose Meal 2', 'meal-2-trigger', 'meal2'));
};

const chooseMealTrigger = () => {
    document.querySelectorAll('.game-container .btn').forEach((trigger) => {
        trigger.addEventListener('click', async () => {
            const mealId = trigger.getAttribute('data-id');
            if(!meals[mealId]) {
                return console.error('Meal not found');
            }

            const perc = await addStats(meals[mealId]);
            for (let node of [...gameConainer.children]) { 
                if (node.id !== mealId) {
                    node.classList.add('fade-out');
                    setTimeout(() => node.remove(), 1000); 
                }
            }
            gameConainer.insertAdjacentHTML('beforeend', analytics(perc));
            gameConainer.insertAdjacentHTML('beforeend', btn('Play Again !', '', '', '', 'play-again-btn'));
        })
    });
}

// document.addEventListener('DOMContentLoaded', async () => {
( async function(){
    if(gameConainer) {
        // console.log(gameConainer);
        await mealChoices();
        // // cardFlip();
        chooseMealTrigger();
        // addIng();
        // addMeals();
        // addIng();
    }
})();
// });
