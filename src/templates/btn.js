const btn = (text, id, dataId, href = 'javascript:void(0)', cls = '') => {
    return `
        <a href="${href}" type="button" class="btn ${cls}" id="${id}" data-id="${dataId}">${text}</button>
    `
}

export default btn;