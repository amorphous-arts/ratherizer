import '../assets/styles/style.scss';
import Meal from "./templates/meal";
import btn from "./templates/btn";
import seperator from "./templates/seperator";
import analytics from "./templates/analytics";
import { getRandomIngredients, getRandomMeals } from "./database/fetch";
import {addStats} from "./database/insert.js";

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
    const [randomMeals, ing] = await Promise.all([ getRandomMeals(), getRandomIngredients()]);


    meals.meal1 = {
        meal: randomMeals[0],
        firstIng: ing[0][0][0],
        secondIng: ing[0][0][1],
        firstToken: randomMeals[0].key === 'stuffed' ? 'stuffed' : '',
        secondToken: afterToken[ing[1][0][0].key],
        thirdIng: ing[1][0][0],
        fourthIng: ing[1][0][1],
    };

    meals.meal2 = {
        meal: randomMeals[1],
        firstIng: ing[0][1][0],
        secondIng: ing[0][1][1],
        firstToken: randomMeals[1].key === 'stuffed' ? 'stuffed' : '',
        secondToken: afterToken[ing[1][1][0].key],
        thirdIng: ing[1][1][0],
        fourthIng: ing[1][1][1],
    };

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

            for (let node of [...gameConainer.children]) { 
                if (node.id !== mealId) {
                    node.classList.add('fade-out');
                    setTimeout(() => node.remove(), 1000); 
                }
            }

            addStats(meals[mealId]).then((perc) => {
                document.querySelector('.meal-analytics #percentage').innerHTML = `<strong>${parseFloat(perc).toFixed(2)}%</strong>`;
            })

            gameConainer.insertAdjacentHTML('beforeend', analytics());
            gameConainer.insertAdjacentHTML('beforeend', btn('Play Again !', '', '', '', 'play-again-btn'));
        })
    });
}

function addGamification() {
    addFartSound();
}

// document.addEventListener('DOMContentLoaded', async () => {
(async function(){
    if(gameConainer) {
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

/**
 * Add fart sound on hover to card, and on Choose Meal click
 * Don't ask lol
 */
function addFartSound() {
    const audio = new Audio('https://cdn.jsdelivr.net/gh/amorphous-arts/ratherizer/assets/audio/fart.mp3');
    document.body.appendChild(audio);

    document.addEventListener('mouseover', (e) => {
        if(e.target.classList.contains('ingredient-container')) {
            audio.volume = 0.15
            audio.play();
        }
    });

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('btn')) {
            audio.volume = 1;
            audio.play();
        }
    });
}
