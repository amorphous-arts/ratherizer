import baseCard from "./base_card";
import ingCard from "./ing_card";
import context from "./context";

const Meal = (id, gameConainer, meal = {}, ) => {
    const mealContainer = document.createElement('div');
    mealContainer.className = `meal-container`;
    mealContainer.id = id;
    mealContainer.insertAdjacentHTML('afterbegin', `
        ${ingCard(meal.firstIng.ing, meal.firstIng.attr, meal.firstIng.rotate)}
        ${ context(!meal.firstIng.rotate ? 'and' : '') }
        ${ingCard(meal.secondIng.ing, meal.secondIng.attr)}
        ${ context(meal.firstToken ? meal.firstToken : '') }
        ${baseCard(meal.meal.name)}
        ${ context(meal.secondToken ? meal.secondToken : '') }
        ${ingCard(meal.thirdIng.ing, meal.thirdIng.attr, meal.thirdIng.rotate)}
        ${ context( !meal.thirdIng.rotate ? 'and' : '')  }
        ${ingCard(meal.fourthIng.ing, meal.fourthIng.attr)}
    `);
    gameConainer.append(mealContainer);
}

export default Meal;