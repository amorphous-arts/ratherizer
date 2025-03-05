const attrDataTemp = (attr, rotate = false) => {
    return `<div class="attr-data ${rotate ? 'rotate' : ''}">
                    <div class="heading card-item">
                        <h3 class="">Attribute</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="">${attr}</p>       
                    </div>
                </div>`
}

export default attrDataTemp;