const context = (text) => {
    return `
        <div class="context-token-container">${text ? `<div class="context-token"><span>${text}</span></div>` : ''}</div>
    `;
}

export default context;
