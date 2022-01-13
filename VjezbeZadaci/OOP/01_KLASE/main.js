import { Boja, ispitajSlicnost, srednjaTalasnaDuzina } from "./modules/01_boja.js";
import { Datum, ranijiDatum } from "./modules/02_datum.js";
import { Radnik, maksPlata, maksPlataOsoba } from "./modules/03_radnik.js";
import { Autobus, ukupnoSjedista, maksSjedista, ljudi } from "./modules/04_autobus.js"
import * as FMradio from "./modules/05_fmradio.js";
import { Krug, upisaniKrug, rastuci } from "./modules/06_krug.js";
import { Cipela, radi, najvisePrepravki, brojPrepravki } from "./modules/07_cipela.js";
import { Student, imePrezime, srednjaOcjena, osrednji, najmanjaOcjenaNajboljeg, najmanjaOcjena, najcescaOcjena, rodjeniGodine } from "./modules/08_student.js";
import { Plivac, topTen, norma, normaNajmladji } from "./modules/09_plivac.js";

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

let stanica1 = new FMradio.FMRadio("    Naxi", 102, 20);
let stanica2 = new FMradio.FMRadio("Naxi Rock", 108, 3.2);
let stanica3 = new FMradio.FMRadio("Play", 98, 3);
let stanica4 = new FMradio.FMRadio("Naxi Dance", 96.8, 15);
let stanica5 = new FMradio.FMRadio("Radio FM", 78.3, 7);
console.log(stanica1);
console.log(stanica2);
console.log(stanica3.jacinaTona);
console.log(stanica4.stanica);
console.log(stanica5.frekvencija);

let stanice = [stanica1, stanica2, stanica3, stanica4, stanica5];
console.log(stanice);

stanica1.promjeniZvuk("+");
stanica2.promjeniZvuk("-");
console.log(stanica1);
console.log(stanica2);

stanica4.frekvencijaIskljuci();
console.log(stanica4);

console.log(FMradio.srednjaFrekvencija(stanice));

console.log(FMradio.najbliziMaks(stanice));


//////////////////////////////////////////////////////
// 6. KRUG
console.log("..................................KRUG..................................");

let krug1 = new Krug(20);
let krug2 = new Krug(30);
let krug3 = new Krug(40);
console.log(krug1);
console.log(krug2.poluprecnik);
console.log(krug3._poluprecnik);

console.log(krug1.obimKruga());
console.log(krug2.povrsinaKruga());

let krugovi = [krug1, krug2, krug3];
console.log(krugovi);

console.log(upisaniKrug(krug2, krug1));
console.log(rastuci(krugovi));


//////////////////////////////////////////////////////
// 6. CIPELA
console.log("..................................CIPELA..................................");

let cipela1 = new Cipela("Starka", 38, ["zalepi"]);
let cipela2 = new Cipela("Vans", 39, ["usij", "prosiri"]);
let cipela3 = new Cipela("Martinka", 40, ["zalepi", "prosiri"]);
let cipela4 = new Cipela("Starka", 37, ["prosiri", "zalepi", "usij"]);
let cipela5 = new Cipela("Air Force", 41, ["usij", "oboji", "prosiri"]);
console.log(cipela1);
console.log(cipela2);
console.log(cipela2.brojCipele);
console.log(cipela3.naziv);
console.log(cipela4.nizPrepravki);
console.log(cipela5._naziv);

cipela1.zalepi();
cipela2.usij();
cipela5.prosiri();

radi(cipela4);
radi(cipela5);

let cipele = [cipela1, cipela2, cipela3, cipela4, cipela5];
console.log(cipele);

najvisePrepravki(cipele);

console.log(brojPrepravki(cipele, "prosiri"));


//////////////////////////////////////////////////////
// 6. STUDENT
console.log("..................................STUDENT..................................");

let student1 = new Student("2311998255026", "Kristina", "Mandic", [10, 7, 9, 10, 8, 9]);
let student2 = new Student("4512997255026", "Jovana", "Bulatovic", [10, 10, 10, 9, 10]);
let student3 = new Student("7865998255026", "Stefan", "Stanimirovic", [8, 8, 8, 7, 6, 10, 7]);
let student4 = new Student("1101994255026", "Jelena", "Matejic", [10, 9, 9, 9, 8, 7, 8]);
let student5 = new Student("1306982550266", "Ines", "Kokotovic", [6, 6, 6, 7, 7, 6, 6]);
console.log(student1);
console.log(student2.nizOcjena);
console.log(student3.jmbg);
console.log(student4.ime);
console.log(student5.prezime);
console.log(student3.prosjecnaOcjena);

student2.ispis();

let studenti = [student1, student2, student3, student4, student5];
console.log(studenti);

console.log(imePrezime(studenti, "Kristina", "Mandic"));

srednjaOcjena(studenti);

console.log(student1.prosjecnaOcjena);
console.log(student2.prosjecnaOcjena);
console.log(student3.prosjecnaOcjena);
console.log(student4.prosjecnaOcjena);
console.log(student5.prosjecnaOcjena);
osrednji(studenti);

najmanjaOcjenaNajboljeg(studenti);

console.log(najmanjaOcjena(studenti));

console.log(najcescaOcjena(studenti));

rodjeniGodine(studenti, 1997);


//////////////////////////////////////////////////////
// 6. PLIVAC
console.log("..................................PLIVAC..................................");

let plivac1 = new Plivac("Marko", 1997, 30);
let plivac2 = new Plivac("Nikola", 1987, 28);
let plivac3 = new Plivac("Nebojsa", 2000, 31);
let plivac4 = new Plivac("Stefan", 1999, 42);
let plivac5 = new Plivac("Srdjan", 1989, 35);
let plivac6 = new Plivac("Dusan", 2001, 22);
let plivac7 = new Plivac("Djordje", 1997, 27);
let plivac8 = new Plivac("Marko", 1998, 32);
let plivac9 = new Plivac("Konstantin", 1988, 34);
let plivac10 = new Plivac("Pavle", 1998, 29);
let plivac11 = new Plivac("Miljan", 2000, 40);
let plivac12 = new Plivac("Nikola", 2001, 36);
console.log(plivac1);
console.log(plivac2.ime);
console.log(plivac3.godinaRodjenja);
console.log(plivac4.najboljiRezultat);

plivac5.ispisi();

let plivaci = [plivac1, plivac2, plivac3, plivac4, plivac5, plivac6, plivac7, plivac8, plivac9, plivac10, plivac11, plivac12];
console.log(plivaci);

console.log(norma(plivaci, 30));

normaNajmladji(plivaci);