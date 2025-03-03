import ingCardTemp from "./ing_card_temp"

const ingCard = (ing, attr) => {
    return `<div class="ingredient-container">
            ${ingCardTemp(ing, attr, 'front', false)} 
            ${ingCardTemp(ing, attr, 'back', true)}
        </div>
        `;
}

export default ingCard;