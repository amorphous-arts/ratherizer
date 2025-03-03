const baseCard = (meal) => {
    return `
        <div class="card base-card">
            <div class="base-data">
                <div class="heading card-item" >
                    <h3 class="">Base Meal</h3>       
                </div>
                <div class="content card-item">
                    <p class="">${meal}</p>       
                </div>
            </div>
        </div>
    `
};

export default baseCard;