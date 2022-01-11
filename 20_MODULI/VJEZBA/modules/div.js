import generateImage from "./general.js";

function generateDiv(parent) {
    let div = document.createElement("div");
    div.style.overflow = "hidden";
    parent.appendChild(div);
    return div;
}

function generateDivItem(parent, src) {
    let div = document.createElement("div");
    div.style.float = "right";
    let img = generateImage(src);
    div.appendChild(img);
    parent.appendChild(div);
    return div;
}

export { generateDiv, generateDivItem };