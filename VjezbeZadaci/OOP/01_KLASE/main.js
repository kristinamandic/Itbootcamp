import { Boja, ispitajSlicnost, srednjaTalasnaDuzina } from "./modules/01_boja.js";
import { Datum, ranijiDatum } from "./modules/02_datum.js";
import { Radnik, maksPlata, maksPlataOsoba } from "./modules/03_radnik.js";
import { Autobus, ukupnoSjedista, maksSjedista, ljudi } from "./modules/04_autobus.js"

// 1. BOJA
console.log("..................................BOJA..................................");

let boja1 = new Boja(400, 5, 3);
let boja2 = new Boja(380, 2, 1);
let boja3 = new Boja(766, 5, 2);
let boja4 = new Boja(766, 5, 2);
console.log(boja1);
console.log(boja2.talasnaDuzina);
console.log(boja3.intenzitet);
console.log(boja4.zasicenje);

let boje = [boja1, boja2, boja3, boja4];
console.log(boje);

console.log(ispitajSlicnost(boja3, boja4));
console.log(srednjaTalasnaDuzina(boje));


//////////////////////////////////////////////////////
// 2. DATUM
console.log("..................................DATUM..................................");

let datum1 = new Datum(23, 12, 2020);
let datum2 = new Datum(23, 11, 2020);
console.log(datum1);
console.log(datum2.dan);
console.log(datum2.mjesec);
console.log(datum2.godina);

ranijiDatum(datum1, datum2);


//////////////////////////////////////////////////////
// 3. RADNIK
console.log("..................................RADNIK..................................");

let radnik1 = new Radnik("Ivan", 400);
let radnik2 = new Radnik("Stefan", 500);
let radnik3 = new Radnik("Nebojsa", 800);
let radnik4 = new Radnik("Igor", 800);
let radnik5 = new Radnik("Djordje", 600);
console.log(radnik1);
console.log(radnik2);
console.log(radnik4);
console.log(radnik5.ime);
console.log(radnik3.plata);

let radnici = [radnik1, radnik2, radnik3, radnik4, radnik5];
console.log(radnici);

console.log(maksPlata(radnici));
maksPlataOsoba(radnici);


//////////////////////////////////////////////////////
// 4. AUTOBUS
console.log("..................................AUTOBUS..................................");

let autobus1 = new Autobus("BG345HB", 50);
let autobus2 = new Autobus("AR768BG", 20);
let autobus3 = new Autobus("BG908KJ", 55);
let autobus4 = new Autobus("BG436DH", 35);
let autobus5 = new Autobus("BG437FH", 50);
let autobus6 = new Autobus("BG697DH", 60);
console.log(autobus1);
console.log(autobus5);
console.log(autobus6);
console.log(autobus2.brojSjedista);
console.log(autobus3.registarskiBroj);
autobus4.ispis();

let autobusi = [autobus1, autobus2, autobus3, autobus4, autobus5, autobus6];

console.log(ukupnoSjedista(autobusi));
maksSjedista(autobusi)
console.log(ljudi(autobusi, 270));


//////////////////////////////////////////////////////
// 5. FMRadio
console.log("..................................FMRadio..................................");