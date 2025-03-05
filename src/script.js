
import cardFlip from "./card_flip";
import Meal from "./templates/meal";
import btn from "./templates/btn";
import seperator from "./templates/seperator";
import analytics from "./templates/analytics";
import { getRandomIngredients, getRandomMeals } from "./database/fetch";
// import { addIng } from "./database/insert";
import { addStats } from "./database/insert";

const gameConainer = document.querySelector('.game-container');

const afterToken = {
    'drinks': 'to drink',
    'sides': 'with a side of',
    'topped': 'topped with',
    'extras': 'with'
}
let firstMeal = '';
let secondMeal = '';

const mealChoices = async () => { 
    const meals = await getRandomMeals();
    const ing = await getRandomIngredients();
    firstMeal = {
        meal: meals[0],
        firstIng: ing[0][0][0],
        secondIng: ing[0][0][1],
        firstToken: meals[0].token == 'stuffed' ? 'stuffed' : '',
        secondToken: afterToken[ing[1][0][0].key],
        thirdIng: ing[1][0][0],
        fourthIng: ing[1][0][1],
    }

    secondMeal = {
        meal: meals[1],
        firstIng: ing[0][1][0],
        secondIng: ing[0][1][1],
        firstToken: meals[1].token == 'stuffed' ? 'stuffed' : '',
        secondToken: afterToken[ing[1][1][0].key],
        thirdIng: ing[1][1][0],
        fourthIng: ing[1][1][1],
    }

    Meal('meal-1', gameConainer, firstMeal);
    gameConainer.insertAdjacentHTML('beforeend', btn('Choose Meal 1', 'meal-1-trigger', 'meal-1'));
    gameConainer.insertAdjacentHTML('beforeend', seperator);
    Meal('meal-2', gameConainer, secondMeal);
    gameConainer.insertAdjacentHTML('beforeend', btn('Choose Meal 2', 'meal-2-trigger', 'meal-2'));
};

const chooseMealTrigger = () => {
    document.querySelectorAll('.game-container .btn').forEach((trigger) => {
        trigger.addEventListener('click', async () => {
            const mealId = trigger.getAttribute('data-id');
            const perc = await addStats(mealId == 1 ? firstMeal : secondMeal);
            for (let node of [...gameConainer.children]) { 
                if (node.id !== mealId) {
                    node.classList.add('fade-out');
                    setTimeout(() => node.remove(), 1000); 
                }
            }
            gameConainer.insertAdjacentHTML('beforeend', analytics(perc));
            gameConainer.insertAdjacentHTML('beforeend', btn('Play Again !', '', '', '/'));
        })
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await mealChoices();
    cardFlip();
    chooseMealTrigger();
});