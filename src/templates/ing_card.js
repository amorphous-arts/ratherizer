import ingCardTemp from "./ing_card_temp"

const ingCard = (ing, attr, rotateCard) => {
    return `<div class="ingredient-container">
            ${ingCardTemp(ing, attr, 'front', rotateCard)} 
            ${ingCardTemp(ing, attr, 'back', !rotateCard ? true : false)}
            <div class="ing-text">
                <span>${rotateCard ? attr + ' ' + ing : ing + ' ' + attr}</span>
            </div>
        </div>
        
        `;
}

export default ingCard;