import baseCard from "./base_card";
import ingCard from "./ing_card";
import context from "./context";

const Meal = (id, gameConainer, meal = {}) => {
    const mealContainer = document.createElement('div');
    mealContainer.className = `meal-container`;
    mealContainer.id = id;
    mealContainer.insertAdjacentHTML('afterbegin', 
        `
            ${ingCard('test', 'test')}
            ${ingCard('test', 'test')}
            ${context('stuffed')}
            ${baseCard(meal.name)}
            ${context('with')}
            ${ingCard('test', 'test')}
            ${ingCard('test', 'test')}
        `
    );
    gameConainer.append(mealContainer);
}

export default Meal;