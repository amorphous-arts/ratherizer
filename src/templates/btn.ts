const btn = (text, dataId): HTMLAnchorElement => {
    const btn = document.createElement('a');
    btn.dataset.id = dataId;
    btn.href = '#';
    btn.type = 'button';
    btn.classList.add('btn');
    btn.innerText = text;

    return btn;
}

export default btn;
