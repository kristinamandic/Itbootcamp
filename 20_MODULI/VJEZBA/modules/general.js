let generateImage = (src) => {
    let img = document.createElement("img");
    img.src = src;
    img.style.width = "200px";
    return img;
};

// export { generateImage };
// Export default exportuje jednu stavku i nisu mu potrebne viticaste zagrade:
// U modulu u koji se importuje, stavlja se samo import bez viticastih zagrada (pogledati list.js i table.js)
export default generateImage;