const context = (text) => {
    return `
        <div class="context-token-container">
            ${text.split(' ').map((char) => {
                if (char) {
                    return `<div class="context-token">
                                <span>${char}</span>
                            </div>`;
                }
                return '';
            }).join('')}
        </div>
    `;
}

export default context;