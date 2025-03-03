const btn = (text, id, dataId, href = 'javascript:void(0)') => {
    return `
        <a href="${href}" type="button" class="btn" id="${id}" data-id="${dataId}">${text}</button>
    `
}

export default btn;