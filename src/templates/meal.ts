import baseCard from "./base_card";
import ingCard from "./ing_card";
import context from "./context";
import {Meal as MealEntity} from "../Entity/meal";

/**
 *
 * @param id
 * @param meal
 * @returns {HTMLDivElement} The meal container with all the cards
 */
export function Meal(id: string, meal: MealEntity): HTMLDivElement {
  const mealContainer = document.createElement('div');
  mealContainer.className = `meal-container`;
  mealContainer.id = id;

  const firstCard = meal.mealDescriptions[0];
  const secondCard = meal.mealDescriptions[1];
  const thirdCard = meal.basemeal;
  const fourthCard = meal.sides[0];
  const fifthCard = meal.sides[1];

  mealContainer.insertAdjacentHTML('afterbegin', `
    <div class="row">
        ${ingCard(firstCard.ingredient, firstCard.attribute, firstCard.doRotate)}
        ${context(firstCard.doRotate || secondCard.doRotate ? '' : 'and')}
        ${ingCard(secondCard.ingredient, secondCard.attribute, secondCard.doRotate)}
        ${context(meal.firstContextToken.trimStart())}
        ${baseCard(thirdCard.descriptor)}
        ${context(meal.secondContextToken)}
        ${ingCard(fourthCard.ingredient, fourthCard.attribute, fourthCard.doRotate)}
        ${context(fourthCard.doRotate || fifthCard.doRotate ? '' : 'and')}
        ${ingCard(fifthCard.ingredient, fifthCard.attribute, fifthCard.doRotate)}
    </div>
    <div class="row">
    <span>${firstCard.doRotate ? firstCard.attribute : firstCard.ingredient}</span>
    <span>${firstCard.doRotate || secondCard.doRotate ? '' : 'and'}</span>
    <span>${secondCard.doRotate ? secondCard.attribute : secondCard.ingredient}</span>
    <span>${meal.firstContextToken.trimStart()}</span>
    <span>${thirdCard.descriptor}</span>
    <span>${meal.secondContextToken}</span>
    <span>${fourthCard.doRotate ? fourthCard.attribute : fourthCard.ingredient}</span>
    <span>${fourthCard.doRotate || fifthCard.doRotate ? '' : 'and'}</span>
    <span>${fifthCard.doRotate ? fifthCard.attribute : fifthCard.ingredient}</span>
    
    
    <!--  <span>${firstCard.doRotate ? firstCard.attribute : firstCard.ingredient}</span>
     <span>${firstCard.doRotate ? firstCard.attribute : firstCard.ingredient}</span>
     <span>${firstCard.doRotate ? firstCard.attribute : firstCard.ingredient}</span>
     <span>${firstCard.doRotate ? firstCard.attribute : firstCard.ingredient}</span> -->
    </div>
    `);

  return mealContainer;
}
