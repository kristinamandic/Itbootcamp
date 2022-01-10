import { generateImage } from "./general.js";

function generateList(parent) {
    let ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.overflow = "hidden"; // zbog float left-a koristimo ovo
    parent.appendChild(ul);
    return ul;
}

function generateListItem(parent, src) {
    let li = document.createElement("li");
    li.style.float = "left";  // da bi slike bile u istoj ravni
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
    return li;
}

export { generateList, generateListItem };


// let list = document.createElement("ul");
// document.body.appendChild(list);
// let listItem1 = document.createElement("li");
// list.appendChild(listItem1);
// listItem1.appendChild(generateImage(img1));

// let listItem2 = document.createElement("li");
// list.appendChild(listItem2);
// listItem2.appendChild(generateImage(img2));

// let listItem3 = document.createElement("li");
// list.appendChild(listItem3);
// listItem1.appendChild(generateImage(img3));

// export { list, listItem1, listItem2, listItem3 };