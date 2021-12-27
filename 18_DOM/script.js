console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

// BY ID
let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);


// BY CLASS
let cont = document.getElementsByClassName("container");
console.log(cont);
console.log(typeof cont);

// Kolekciji elemenata sa istom klasom mozemo pristupiti FOR petljom, medjutim ne mozemo FOREACH petljom - odn. pristupanje pojedinacnim objektima
for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

// Konvertovanje kolekcije u niz - tada mozemo da pristupimo preko FOREACH petlje
let contNiz = Array.from(cont);
contNiz.forEach(elem => {
    console.log(elem);
});


// BY TAG NAME
let paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}


// BY NAME
let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}


// PREKO CSS-a
// QUERY - Vraca samo prvi - logican je za objekte sa id-jem jer imamo samo jedan takav objekat
p1 = document.querySelector("#p1");
console.log(p1);

cont = document.querySelector(".container");
console.log(cont);

// QUARY ALL - Vraca sve elemente - stvara Node listu kojom mozemo da pristupano i FOR i FOREACH petljom
cont = document.querySelectorAll(".container");
console.log(cont);
for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(e => {
    console.log(e);
});

// Dohvati sve paragrafe
paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

// Dohvati sve tagove sa imenom "link"
linkovi = document.querySelectorAll("[name='link']");
console.log(linkovi);


// VJEZBANJE
// 1. Zadatak - Dohvatiti prvi paragraf na stranici.

let prviParagraf = document.querySelector("p");
console.log(prviParagraf);


// 2. Zadatak - Dohvatiti prvi div tag sa klasom „error“.

let prviError = document.querySelector("div.error");
console.log(prviError);

//ILI
prviError = document.getElementsByClassName("error");
console.log(prviError[0]);


// 3. Zadatak - Dohvatiti poslednji red u tabeli.

let posljednjiRed = document.querySelectorAll("tr");
for (let i = 0; i < posljednjiRed.length; i++) {
    if (i == (posljednjiRed.length - 1)) {
        console.log(posljednjiRed[i]);
    }
}

// ILI
posljednjiRed = document.getElementsByTagName("tr");
console.log(posljednjiRed[posljednjiRed.length - 1]);

// ILI
posljednjiRed = document.querySelector("table tr:last-child");
console.log(posljednjiRed);


// 4. Zadatak - Dohvatiti sve linkove na stranici.

let sviLinkovi = document.querySelectorAll("a");
console.log(sviLinkovi);
sviLinkovi.forEach(e => {
    console.log(e);
});

// ILI
sviLinkovi = document.getElementsByTagName("a");
console.log(sviLinkovi);
let sviLinkoviNiz = Array.from(sviLinkovi);
sviLinkoviNiz.forEach(e => {
    console.log(e);
});

// ILI
sviLinkovi = document.links;
console.log(sviLinkovi);


// 5. Zadatak - Dohvatiti sve slike na stranici.

let sveSlike = document.getElementsByTagName("img");
console.log(sveSlike);
for (let i = 0; i < sveSlike.length; i++) {
    console.log(sveSlike[i]);
}

// ILI
sveSlike = document.images;
console.log(sveSlike);

// ILI
sveSlike = document.querySelectorAll("img");
console.log(sveSlike);

// ILI
sveSlike = document.querySelectorAll("img[src]");
console.log(sveSlike);