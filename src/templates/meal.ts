import baseCard from "./base_card";
import ingCard from "./ing_card";
import context from "./context";
import {Meal as MealEntity} from "../Entity/meal";

export function Meal(id: string, gameContainer: HTMLElement, meal: MealEntity) {
    const mealContainer = document.createElement('div');
    mealContainer.className = `meal-container`;
    mealContainer.id = id;

    const firstCard = meal.mealDescriptions[0];
    const secondCard = meal.mealDescriptions[1];
    const thirdCard = meal.basemeal;
    const fourthCard = meal.sides[0];
    const fifthCard = meal.sides[1];

    mealContainer.insertAdjacentHTML('afterbegin', `
        ${ingCard(firstCard.ingredient, firstCard.attribute, firstCard.doRotate)}
        ${ context(firstCard.doRotate || secondCard.doRotate ? '' : 'and') }
        ${ingCard(secondCard.ingredient, secondCard.attribute, secondCard.doRotate)}
        ${ context(meal.firstContextToken.trimStart()) }
        ${baseCard(thirdCard.descriptor)}
        ${ context(meal.secondContextToken) }
        ${ingCard(fourthCard.ingredient, fourthCard.attribute, fourthCard.doRotate)}
        ${ context(fourthCard.doRotate || fifthCard.doRotate ? '' : 'and')  }
        ${ingCard(fifthCard.ingredient, fifthCard.attribute, fifthCard.doRotate)}
    `);
    gameContainer.append(mealContainer);
}
