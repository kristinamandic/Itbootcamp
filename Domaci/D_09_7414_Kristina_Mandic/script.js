// 1. Zadatak - Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.

let lista = niz => {
    let rez = ``;
    rez += `<ul>`
    niz.forEach(el => {
        rez += `<li>${el}</li>`
    })
    rez += `</ul>`
    document.body.innerHTML += rez;
};

let kupovina = ["jaja", "mlijeko", "secer", "brasno", "ulje"];
lista(kupovina);


// 2. Zadatak - Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.

let imenaTimova = niz => {
    rez = ``;
    rez += `<table border="1">`;
    niz.forEach(el => {
        rez += `<tr><td>${el}</td></tr>`;
    });
    rez += `</table>`;
    document.body.innerHTML += rez;
};

let timovi = ["Crvena zvezda", "Partizan", "Vojvodina", "Vozdovac", "Atlas"];
imenaTimova(timovi);


// 3. Zadatak - Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.

let slike = niz => {
    niz.forEach(el => {
        document.body.innerHTML += `<img src="${el}" width="50%"/>`;
    });
};

let putanje = ["https://cdn.statically.io/img/i.pinimg.com/originals/49/ee/34/49ee3447eef36b7a2989a080be5222b7.jpg", "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg", "https://wallpaperaccess.com/full/2774333.jpg", "https://wallpaper.dog/large/10838842.jpg"];

slike(putanje);