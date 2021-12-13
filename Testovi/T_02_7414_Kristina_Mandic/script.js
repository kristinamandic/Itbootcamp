// Zadatak 1
let datum = new Date();
let sati = datum.getHours();
let minuti = datum.getMinutes();
let ps; // preostalo sati
let pm; // preostalo minuta
if (sati < 9) {
    console.log("Radno vrijeme jos uvijek nije pocelo");
}
else if (sati >= 17) {
    console.log("Radno vrijeme je vec zavrseno");
}
if (sati >= 9 && sati < 17) {
    ps = 17 - sati;
    pm = 60 - minuti;
    if (pm < 60) {
        ps--;
    }
    else if (pm == 60) {
        pm = 0;
    }
    console.log(`Do kraja radnog vremena je ostalo ${ps} sati i ${pm} minuta`);
}


// 2. Zadatak
let tezinaP = 2200; // tezina posiljke
let postarina = 5;
let csp; // cijena sa popustom
let cbp; // cijena bez popusta
if (tezinaP > 1000 && tezinaP < 2000) {
    cbp = tezinaP * postarina;
    csp = tezinaP * postarina - (tezinaP * postarina * 0.05);
    console.log(`Cijena bez popusta je ${cbp}`);
    console.log(`Cijena sa popustom je ${csp}`);
}
else if (tezinaP > 2000) {
    cbp = tezinaP * postarina;
    csp = tezinaP * postarina - (tezinaP * postarina * 0.1);
    console.log(`Cijena bez popusta je ${cbp}`);
    console.log(`Cijena sa popustom je ${csp}`);
}
else {
    cbp = tezinaP * postarina;
    console.log(`Cijena bez popusta je ${cbp}`);
    console.log(`Nema popusta na posiljku`);
}


// 3. Zadatak
let ruze = 100;
let kupci = 25;
let rd = 0; // ruza dokupiti
let rpk; // ruza po kupcu
for (i = 0; i <= kupci; i++) {
    if (ruze % kupci != 0) {
        ruze++;
        rd++;
    }
}
rpk = ruze / kupci;
console.log(`Cvjecarka mora da dokupi najmanje ${rd} da bi svaki kupac imao po ${rpk} ruza`);


// 4. Zadatak 
let suma = 0;
let brB = 0; // broj brojeva
let n = 7;
let m = 14;
let proizvod;
for (i = n; i <= m; i++) {
    if (i % 7 == 0) {
        brB++;
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji su djeljivi sa 7 je ${suma}`);
console.log(`Broj brojeva od ${n} do ${m} koji su djeljivi sa 7 je ${brB}`);
proizvod = suma * brB;
console.log(`Proizvod sume i broja brojeva od ${n} do ${m} koji su djeljivi sa 7 je ${proizvod}`);


// 5. Zadatak 
n = 5;
m = 38;
i = n;
suma = 0;
brB = 0;
let razlika;
while (i <= m) {
    if (i % 2 == 0 && i % 3 == 0) {
        suma += i;
    }
    if (i % 10 == 3) {
        brB++;
    }
    i++;
}
razlika = suma - brB;
console.log(`Razlika zbira parnih brojeva od ${n} do ${m} koji su deljivi sa 3 i broja brojeva od ${n} do ${m} kojima je poslednja cifra 3 je ${razlika}`);