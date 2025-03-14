const cardFlip = () => {
    document.querySelectorAll('.ingredient-container').forEach((card) => {
        card.addEventListener('click', () => {
            cardFlipAnimaition(card);
        });
    })
}

const cardFlipAnimaition = (card) => {
    const flipped = card.classList.contains('flipped') ? true : false;
    if(!flipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }

    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    front.style.transform = `rotateX(${!flipped ? '-180' : '0'}deg)`;
    back.style.transform = `rotateX(${!flipped ? '0' : '180'}deg)`;
};


export default cardFlip;