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


////////////////////////////////////////////////
// MJENJANJE SADRZAJA ELEMENATA

// Moze da se pise = ili +=, += dodaje novu vrijednost
p1.innerHTML += "Promjenjen <span>tekst</span> paragrafa";


// Promjena href atributa svim linkovima
sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach(link => {
    // HTML atributi
    link.href = "https://www.google.com/";
    link.target = "_blank";

    // CSS stilovi
    link.style.color = "green";
    link.style.textDecoration = "none";

    // link.style = "color: green; text-decoration: none";

    // Preko metode
    link.setAttribute('name', 'link2');  // isto kao i link.name = 'link2;'
    link.setAttribute("style", "color: green; text-decoration: none");  // isto kao i link.style...
});


/////////////////////////////////////////////
// VJEZBANJE
// 1. Zadatak - Selektovati sve paragrafe i u svakom od njih pridodati tekst "VAZNO!!!"

paragrafi = document.querySelectorAll("p");
paragrafi.forEach(p => {
    p.innerHTML += "VAZNO!!!"
});


// 2. Zadatak - Svim divovima na stranici sa klasom "error", dodati po jedan naslov najvese velicine sa tekstrom "Greska!"

let error = document.getElementsByClassName("div.error");
let errorNiz = Array.from(error);
errorNiz.forEach(div => {
    div.innerHTML += `<h1>Greska!</h1>`
});


// 3. Zadatak - Neka je broj n broj paragrafa u datom dokumentu. U svakom i-tom paragrafu dodati broj i*i, za svako i = 1, 2, ...n

paragrafi = document.getElementsByTagName("p");
// let paragrafiNiz = Array.from(paragrafi);
console.log(paragrafi);
for (let i = 1; i < paragrafi.length; i++) {
    paragrafi[i].innerHTML += i * i;
}

// let paragrafiNiz = Array.from(paragrafi);
// paragrafiNiz.forEach((p, index) => {
//     p.innerHTML += (index + 1) ** 2;  // nesto nije okej s ovim
// });


// 4. Zadatak - Svim slikama dodati alternativni tekst

sveSlike = document.getElementsByTagName("img");
let sveSlikeNiz = Array.from(sveSlike);
sveSlikeNiz.forEach(s => {
    s.alt = "Drvo";
});


// 5. Zadatak - Svim paragrafima postaviti stribut style tako da budu obojeni ljubicastom bojom

paragrafi = document.getElementsByTagName("p");
paragrafiNiz = Array.from(paragrafi);
paragrafiNiz.forEach(p => {
    p.setAttribute("style", "color: purple");
});


// 6. Zadatak - Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju

paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    if (i % 2 == 0) {
        paragrafi[i].style.backgroundColor = "green";
        paragrafi[i].style.color = "red";

    }
    else {
        paragrafi[i].style.backgroundColor = "red";
    }
}

// 7. Zadatak

sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach((l, i) => {
    l.style.padding = "5px";
    l.style.fontSize = "18px";
    l.style.textDecoration = "none";
    if (i % 2 != 0) {
        l.style.backgroundColor = "green";
        l.style.color = "purple";
    }
    else {
        l.style.backgroundColor = "blue";
        l.style.color = "white";
    }
});


// 8. Zadatak 
// Imas slikano na telefonu
sveSlike = document.querySelectorAll("img[png]");
// sveSlike.forEach(s => {
//     s.style.border = "red solid 2px";
//     // s.style.borderWidth = "2px"
// });


// 9. Zadatak 


// 10. Zadatak 

let imena = ["Jelena", "Stefan", "Kristina", "Ines"];

imena.forEach(i => {
    /*
    if (i.charAt(0) == "S") {
        document.body.innerHTML += `<a href="# _blank">${i}</a><br>`
    }
    else {
        document.body.innerHTML += `<a href="#">${i}</a><br>`
    }
    */
    /*
    if (i.startsWith("S")) {
        document.body.innerHTML += `<a href="#" target="_blank">${i}</a><br>`
    }
    else {
        document.body.innerHTML += `<a href="#">${i}</a><br>`
    }
    */
    if (i[0] == "S") {
        document.body.innerHTML += `<a href="#" target="_blank">${i}</a><br>`
    }
    else {
        document.body.innerHTML += `<a href="#">${i}</a><br>`
    }
});


// U listi nesto, drugi dio zadatka

let listaString = "<ul>";
imena.forEach((ime, i) => {
    if (i % 2 == 0) {
        listaString += `<li style="color:red">${ime}</li>`
    }
    else {
        listaString += `<li style="color:limegreen">${ime}</li>`
    }
});
listaString += "</ul>";
document.body.innerHTML += listaString;

// Treci dio zadatka - samostalno




////////////////////////////////////////
// MJENJANJE KLASA ELEMENTIMA

// 1. Zadatak - Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

paragrafi = document.querySelectorAll("p");
paragrafi.forEach((p, i) => {
    if (i % 2 != 0) {
        p.classList.add("error");
    }
    else {
        p.classList.add("success");
    }
});


// 2. Zadatak - Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

paragrafi = document.querySelectorAll("p");
paragrafi.forEach((p, i) => {
    if (i % 3 == 1) {
        p.style.fontSize = "15px";
    }
    else if (i % 3 == 2) {
        p.style.fontSize = "20px";
    }
    else {
        p.style.fontSize = "25px";
    }
});


// 3. Zadatak - Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//  if(p.textContent.includes(’success’))

paragrafi = document.getElementsByTagName("p");
paragrafiNiz = Array.from(paragrafi);
paragrafiNiz.forEach(p => {
    if (p.textContent.includes("error")) {
        p.classList.add("error");
    }
    else if (p.textContent.includes("success")) {
        p.classList.add("success");
    }
});
console.log(paragrafi);


// 4. Zadatak - Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

paragrafiNiz.forEach(p => {
    p.classList.toggle("error");
});
console.log(paragrafiNiz);