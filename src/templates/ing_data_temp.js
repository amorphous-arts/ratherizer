const ingDataTemp = (ing, rotate = false) => {
    return `<div class="ing-data ${rotate ? 'rotate' : ''}">
                    <div class="heading card-item">
                        <h3 class="">Ingredient</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="">${ing}</p>       
                    </div>
                </div>`
};
                
export default ingDataTemp;