console.log("IF - ELSE IF");

let ocjena = 4;
if(ocjena == 5){
    console.log("Odlican 5");
}
else if(ocjena == 4){
    console.log("Vrlodobar 4");
}
else if(ocjena == 3){
    console.log("Dobar 3");
}
else if(ocjena == 2){
    console.log("Dovoljan 2");
}
else if(ocjena == 1){
    console.log("Nedovoljan 1");
}
else{
    console.log("Pogresan unos");
}

console.log("Kod nakon if - else if");

// VJEZBANJE
// 7. Zadatak
//Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let brojPoena = 51;
if(brojPoena > 100){
    console.log("Pogresan unos");
}
if(brojPoena > 90){
    console.log("Ocjena 10");
}
else if(brojPoena > 80){
    console.log("Ocjena 9");
}
else if(brojPoena > 70){
    console.log("Ocjena 8");
}
else if(brojPoena > 60){
    console.log("Ocjena 7");
}
else if(brojPoena > 50){
    console.log("Ocjena 6");
}
else if(brojPoena <= 50){
    console.log("Student je pao ispit");
}
else{
    console.log("Pogresan unos");
}

// 8. Zadatak
//Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let datum = new Date();
let dan = datum.getDay();
// if(dan = 0){
//     console.log("Vikend je");
// }
// else if(dan = 1){
//     console.log("Radni je dan");
// }
// else if(dan = 2){
//     console.log("Radni je dan");
// }
// else if(dan = 3){
//     console.log("Radni je dan");
// }
// else if(dan = 4){
//     console.log("Radni je dan");
// }
// else if(dan = 5){
//     console.log("Radni je dan");
// }
// else if(dan = 6){
//     console.log("Vikend je");
// }
// else{
//     console.log("Pogresan unos");
// }

if(dan == 0){
    console.log("Danas je vikend");
}
else if(dan == 6){
    console.log("Danas je vikend");
}
else{
    console.log("Danas je radni dan");
}

// 9. Zadatak
// Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.

let sat = datum.getHours();
if( sat < 12){
    console.log("Dobro jutro");
}
else if(sat < 18){
    console.log("Dobar dan");
}
else{
    console.log("Dobro vece");
}

//10. Zadatak
//Uporediti dva uneta datuma i ispisati koji od njih je raniji. 

let d1 = 23;
let m1 = 10;
let g1 = 2016;

let d2 = 30;
let m2 = 5;
let g2 = 2010;

let max = g1;

// if(max <= g2){
//     max = m2;
// }
// else{
//     console.log("Prvi datum je veci datum");
// }
// if(max <= m1){
//     max = d1;
// }
// else{
//     console.log("Drugi datum je veci datum");
// }
// if(max > d2){
//     console.log("Prvi datum je veci datum");
// }
// else{
//     console.log("Drugi datum je veci datum");
// }


// 11. Zadatak
//Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let sat1;
if(sat >= 9){
    sat1 = sat;
}
if(sat1 < 17){
    console.log("Firma trenutno radi");
}
else{
    console.log("Firma trenutno ne radi");
}


// 12. Zadatak
//Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati doatno)

let p1 = 14;
let k1 = 22;
let p2 = 7;
let k2 = 12;

if(k1 < p2) {
    console.log("Ne preklapaju se");
}
else if(k2 < p1){
    console.log("Ne preklapaju se");
}
else{
    console.log("Preklapaju se");
}

// 13. Zadatak
//Za uneti broj ispitati da li je paran ili nije.
// let broj = 7;
// let paranBroj = broj % 2;
// if(paranBroj == 0 ){
//     console.log("Broj je paran");
// }
// else{
//     console.log("Broj je neparan");
// }


let k = 8;
if(k % 2 == 0){
    console.log(`Broj ${k} je paran`);
}
else{
    console.log(`Broj ${k} je neparan`);
}

// 14. Zadatak
//Za uneti broj ispisati da li je deljiv sa 3 ili ne.
// nesto / 0 = beskonacno
// 0 / nesto = 0

if(k % 3 != 0){
    console.log(`Broj ${k} nije djeljiv brojem 3`);
}
else{
    console.log(`Broj ${k} je djeljiv brojem 3`);
}

// 15. Zadatak
//Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

// 16. Zadatak
//Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let broj = 3;
if(broj <= 0){
    broj = broj - 1;  // isto kao da smo stavili broj++ ili broj +=1
    console.log(broj);  //broj-- ili broj -=1
}
else{
    broj = broj + 1;
    console.log(broj);
}

// 17. Zadatak
//Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 

let a = 8;
let b = 9;
let c = 2;

//Najveci broj
let maks = a;
if(maks < b){
    maks = b;
}
if(maks < c){
    maks = c;
}
console.log(`Najveci broj je ${maks}`);

//Najmanji broj
let min = a;
if(min > b){
    min = b;
}
if(min > c){
    min = c;
}
console.log(`Najmanji broj je ${min}`);

//Srednji broj
let srednji = a + b + c - min - maks;
console.log(`Srednji broj je ${srednji}`);

// 18. Zadatak
//Za učitani broj ispitati da li je ceo.

// Prvi nacin
let s = 15.9;
console.log(s%1);
if(s % 1 == 0){
    console.log(`Broj ${s} je cijeli broj`);
}
else{
    console.log(`Broj ${s} nije cijeli broj`);
}

// Drugi nacin
s = 14;
console.log(Math.floor(s));
if(Math.floor(s) == s){
    console.log(`Broj ${s} je cijeli broj`);
}
else{
    console.log(`Broj ${s} nije cijeli broj`);
}
