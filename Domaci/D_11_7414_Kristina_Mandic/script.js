let knjiga1 = {
    naziv: "Kad je Nice plakao",
    autor: "Irvin Jalom",
    putanja: "https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/287608_w.jpg",
    procitana: true
};

let knjiga2 = {
    naziv: "Gordost i predrasuda",
    autor: "Dzjen Ostin",
    putanja: "https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/239315_w.jpg",
    procitana: true
};

let knjiga3 = {
    naziv: "Norveska suma",
    autor: "Haruki Murakami",
    putanja: "https://novaknjiga.com/product-images/46371/310_1.jpg",
    procitana: false
};

let knjiga4 = {
    naziv: "Ema",
    autor: "Dzejn Ostin",
    putanja: "https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/255873_w.jpg",
    procitana: false
};

let knjige = [knjiga1, knjiga2, knjiga3, knjiga4];


let tabela = document.createElement("table");

knjige.forEach((k, i) => {
    // Redovi
    let tr = document.createElement("tr");
    if (i % 2 == 0) {
        tr.style.backgroundColor = "purple";
    }
    else {
        tr.style.backgroundColor = "pink";
    }
    tabela.appendChild(tr);

    // Prva kolona
    let td1 = document.createElement("td");
    tr.appendChild(td1);
    let slika = document.createElement("img");
    slika.src = `${k.putanja}`;
    slika.style.width = "50%";
    td1.appendChild(slika);

    // Druga kolona
    let td2 = document.createElement("td");
    tr.appendChild(td2);
    let p = document.createElement("p");
    p.textContent = `${k.naziv} - ${k.autor}`;
    if (k.procitana == true) {
        p.style.color = "blue";
    }
    else {
        p.style.color = "gray";
    }
    td2.appendChild(p);
});

document.body.appendChild(tabela);



// Pravljenje tabele preko innerHTML - ovo sam prvo napravila, pa sam u razgovoru sa koligama shvatila da nije ptrebalo ovako, ali ne bih da brisem, pa ostavljam ovdje
// let tabela = "";
// tabela += "<table>";
// knjige.forEach((k, i) => {
//     if (i % 2 == 0) {
//         if (k.procitana == true) {
//             tabela += `<tr style="background-color:purple"><td><img src="${k.putanja}" width="50%"></td><td><p style="color:blue">${k.naziv} - ${k.autor}</p></td></tr>`;
//         }
//         else {
//             tabela += `<tr style="background-color:purple"><td><img src="${k.putanja}" width="50%"></td><td><p style="color:gray">${k.naziv} - ${k.autor}</p></td></tr>`;
//         }
//     }
//     else {
//         if (k.procitana == true) {
//             tabela += `<tr style="background-color:pink"><td><img src="${k.putanja}" width="50%"></td><td><p style="color:blue">${k.naziv} - ${k.autor}</p></td></tr>`;
//         }
//         else {
//             tabela += `<tr style="background-color:pink"><td><img src="${k.putanja}" width="50%"></td><td><p style="color:gray">${k.naziv} - ${k.autor}</p></td></tr>`;
//         }
//     }
// });
// tabela += "</table>";
// document.body.innerHTML += tabela;