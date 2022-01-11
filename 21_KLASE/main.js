// let datum = new Date(); - klasa za datum koja je ugradjena u js

// Nizovi u JS su u stvari objekti ugradjene klase Array; on moze da se pise
// let niz1 = [1, 2, 3];
// let niz2 = new Array {1, 2, 3};

import Auto from "./moduls/auto.js";

// Pravljenje objekata preko klase Auto
let a1 = new Auto("Citroen C4", "crna", false);
// Nakon ovoga, a1 je ibjekat koji ima sljedeca polja:
// a1._marka (vrijednost ovog polja je "Citroen C4")
// a1._boja (vrijednost ovog polja je "crna")
// a1._imaKrov (vrijednost ovog polja je false)
console.log(a1);
console.log(typeof a1);

let a2 = new Auto("Skoda Octavia", "plava", true, 4);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto("Fiat Punto", "bijela", false);
console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);
a3._brojVrata = 5;  // mozemo i da dodamo polja
console.log(a3);

let a4 = new Auto("     ", undefined, true);
a4._imakrov = false;  // unjeli smo pogresno parametar i napravio se novi
console.log(a4);

// Pozivanje metode sviraj:
a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

// Pozivanje metode vozi:
a1.vozi(50);
a4.vozi(200);

// U klasi pisemo polja i metode
// Sva polja klase se definisu u constructor metodi
// Mozemo dodavati proizvoljne metode
// Svi objekti klase imace polja i metode navedene u klasi

a1._brojVrata = 4; // Poljima se pristupa bez zagrade
a1.sviraj(); // Metodima se pristupa sa zagradama a izmedju zagrada se navode parametri ako ih ima

// SETER
// a1.postaviMarku("     Audi A4");
a1.marka = "     Audi A4";  // seter marka
console.log(a1);

// GETER
// console.log(a1.dohvatiMarku());
console.log(a1.marka);  // geter marka


let a5 = new Auto("     Audi A4", "plava", false, 3);
console.log(a5);

// Geteri i seteri su metode ali se pozivaju kao polja

// Pozivanje metode stampaj:
a3.stampaj();