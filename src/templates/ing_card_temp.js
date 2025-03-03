import attrDataTemp from "./attr_data_temp";
import ingDataTemp from "./ing_data_temp";

const ingCardTemp = (ing, attr, cls, rotate) => {
    return `
        <div class="card ing-card ${cls}">
            ${rotate ? attrDataTemp(attr) + ingDataTemp(ing, true) : ingDataTemp(ing) + attrDataTemp(attr, true)}
        </div>
    `
};

export default ingCardTemp;