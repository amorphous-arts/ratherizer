import baseCard from "./base_card";
import ingCard from "./ing_card";
import context from "./context";
import {Meal as MealEntity} from "../Entity/meal";
import {IngredientCard} from "../Entity/ingredient-card";

// The word(s) a card contributes to the sentence (the side facing up).
const cardText = (card: IngredientCard): string => (card.doRotate ? card.attribute : card.ingredient);

// One piece of the row: a card or a circle, with its descriptor centered underneath.
const slot = (kind: 'card' | 'token', html: string, text: string): string => `
    <div class="slot slot-${kind}${kind === 'token' && !text ? ' slot-empty' : ''}">
        ${html}
        ${text ? `<div class="caption">${text}</div>` : ''}
    </div>`;

/**
 *
 * @param meal
 * @returns {HTMLDivElement} The meal container with all the cards
 */
export function Meal(meal: MealEntity): HTMLDivElement {
  const mealContainer = document.createElement('div');
  mealContainer.className = `meal-container`;

  const firstCard = meal.mealDescriptions[0];
  const secondCard = meal.mealDescriptions[1];
  const thirdCard = meal.basemeal;
  const fourthCard = meal.sides[0];
  const fifthCard = meal.sides[1];

  // The 9 pieces of the sentence, left to right (cards and connecting words).
  const parts = [
    cardText(firstCard),
    firstCard.doRotate || secondCard.doRotate ? '' : 'and',
    cardText(secondCard),
    meal.firstContextToken.trimStart(),
    thirdCard.descriptor,
    meal.secondContextToken,
    cardText(fourthCard),
    fourthCard.doRotate || fifthCard.doRotate ? '' : 'and',
    cardText(fifthCard),
  ];

  mealContainer.insertAdjacentHTML('afterbegin', `
    <div class="row">
        ${slot('card', ingCard(firstCard.ingredient, firstCard.attribute, firstCard.doRotate), parts[0])}
        ${slot('token', context(parts[1]), parts[1])}
        ${slot('card', ingCard(secondCard.ingredient, secondCard.attribute, secondCard.doRotate), parts[2])}
        ${slot('token', context(parts[3]), parts[3])}
        ${slot('card', baseCard(thirdCard.descriptor), parts[4])}
        ${slot('token', context(parts[5]), parts[5])}
        ${slot('card', ingCard(fourthCard.ingredient, fourthCard.attribute, fourthCard.doRotate), parts[6])}
        ${slot('token', context(parts[7]), parts[7])}
        ${slot('card', ingCard(fifthCard.ingredient, fifthCard.attribute, fifthCard.doRotate), parts[8])}
    </div>
    <div class="row meal-string">
    ${parts.map((part) => `<span>${part}</span>`).join('\n    ')}
    </div>
    `);

  return mealContainer;
}
