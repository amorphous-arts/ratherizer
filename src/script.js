
import cardFlip from "./card_flip";
import Meal from "./templates/meal";
import btn from "./templates/btn";
import seperator from "./templates/seperator";
import analytics from "./templates/analytics";
import { getRandomIngredients, getRandomMeals } from "./database/fetch";
// import { addIng } from "./database/insert";

const gameConainer = document.querySelector('.game-container');

const mealChoices = async () => { 
    const meals = await getRandomMeals();
    // const ing = await getRandomIngredients();
    Meal('meal-1', gameConainer, meals[0])
    gameConainer.insertAdjacentHTML('beforeend', btn('Choose Meal 1', 'meal-1-trigger', 'meal-1'));
    gameConainer.insertAdjacentHTML('beforeend', seperator);
    Meal('meal-2', gameConainer, meals[1])
    gameConainer.insertAdjacentHTML('beforeend', btn('Choose Meal 2', 'meal-2-trigger', 'meal-2'));
};

const chooseMealTrigger = () => {
    document.querySelectorAll('.game-container .btn').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const mealId = trigger.getAttribute('data-id');
            for (let node of [...gameConainer.children]) { 
                if (node.id !== mealId) {
                    node.classList.add('fade-out');
                    setTimeout(() => node.remove(), 1000); 
                }
            }
            gameConainer.insertAdjacentHTML('beforeend', analytics());
            gameConainer.insertAdjacentHTML('beforeend', btn('Play Again !', '', '', '/'));
        })
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await mealChoices();
    cardFlip();
    chooseMealTrigger();
});