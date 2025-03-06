import baseCard from "./base_card";
import ingCard from "./ing_card";
import context from "./context";

const Meal = (id, gameConainer, meal = {}, ) => {
    const mealContainer = document.createElement('div');
    mealContainer.className = `meal-container`;
    mealContainer.id = id;
    mealContainer.insertAdjacentHTML('afterbegin', `
        ${ingCard(meal.firstIng.ing, meal.firstIng.attr, meal.firstIng.rotate)}
        ${context('and')}
        ${ingCard(meal.secondIng.ing, meal.secondIng.attr, meal.secondIng.rotate)}
        ${meal.firstToken ? context(meal.firstToken) : ''}
        ${baseCard(meal.meal.name)}
        ${meal.secondToken ? context(meal.secondToken) : ''}
        ${ingCard(meal.thirdIng.ing, meal.thirdIng.attr, meal.thirdIng.rotate)}
        ${ingCard(meal.fourthIng.ing, meal.fourthIng.attr, meal.fourthIng.rotate)}
    `);
    gameConainer.append(mealContainer);
}

export default Meal;