"use-strict"; //JS kod mora pravilno da se kuca
//1 Zadatak
let a = 12;
let b = 45;
let c = a * 60 + b;
console.log("Od ponoci je proslo " + c + " minuta");

let doPonoci = 24 * 60 - c;
console.log("Do ponoci je ostalo: " + doPonoci + " minuta");


// 2 Zadatak
let d = c % 60; // ostatak od miunta od ponoci
console.log(d);
let e = ( c - d ) / 60; // minuti od sata pretvoreni u sate
console.log(e);
console.log(e + ":" + d); // sati plus minuti

//3 Zadatak
let x = 150; //cijena robe
let y = 2000; //novcanica
let z = y - x; //kusur
console.log(z);

//4 Zadatak
let aa = 14;
let bb = 56;
let cc = aa * 60;
console.log(cc + bb);

//5 Zadatak
let dan = 26;
let mje = 11;
let god = 2021;
console.log(dan + "." + mje + "." + god + ".");
console.log(god + "/" + mje + "/" + dan)

//6 Zadatak
let euro = 35;
let kurs = 117.4;
let din = euro * kurs;
console.log("Imamo: " + din +" dinara");
let euro2 = din / kurs;
console.log("Imamo: " + euro2 + " eura")

//7 Zadatak
let euro7 = 78;
let euroDinar = 117.4;
let dolarDinar = 100;
let dinar = euro7 * euroDinar;
console.log(dinar);
let dolar = dinar / dolarDinar;
console.log("Imamo: " + dolar + " dolara");

let euro7b = dolar * dolarDinar / euroDinar;
console.log("Imamo: " + euro7b + " eura");

// Trenutni datum i vrijeme
let datum = new Date();  // datum - objekat koji sadrzi inf. o trenutnom datumu i vremenu

let godina = datum.getFullYear();
let mjesec = datum.getMonth() + 1;
let datumUMjesecu = datum.getDate(); // datum u mjesecu
let danUNedelji = datum.getDay();
console.log("Danas je " + datumUMjesecu + "." +  mjesec + "." + godina);
console.log(danUNedelji);