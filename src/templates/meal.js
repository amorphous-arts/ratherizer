import baseCard from "./base_card";
import ingCard from "./ing_card";
import context from "./context";

const Meal = (id, gameConainer, meal = {}, ) => {
    const mealContainer = document.createElement('div');
    mealContainer.className = `meal-container`;
    mealContainer.id = id;
    mealContainer.insertAdjacentHTML('afterbegin', 
        `
            ${ingCard(meal.firstIng.ing, meal.firstIng.attr)}
            ${ingCard(meal.secondIng.ing, meal.secondIng.attr)}
            ${meal.firstToken ? context(meal.firstToken) : ''}
            ${baseCard(meal.meal.name)}
            ${meal.secondToken ? context(meal.secondToken) : ''}
            ${ingCard(meal.thirdIng.ing, meal.thirdIng.attr)}
            ${ingCard(meal.fourthIng.ing, meal.fourthIng.attr)}
        `
    );
    gameConainer.append(mealContainer);
}

export default Meal;