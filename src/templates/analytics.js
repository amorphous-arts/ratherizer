const analytics = (perc) => {
    return `<div class="meal-analytics"><p> This meal was also chosen by <strong>${parseFloat(perc).toFixed(2)}%</strong> of users.</p></div>`;
}

export default analytics;