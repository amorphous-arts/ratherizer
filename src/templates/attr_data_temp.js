const attrDataTemp = (attr, rotate = false) => {
    return `<div class="attr-data ${rotate ? 'rotate' : ''}">
                    <div class="heading card-item">
                        <h3 class="text-2xl text-white">Attribute</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="text-lg text-white">${attr}</p>       
                    </div>
                </div>`
}

export default attrDataTemp;