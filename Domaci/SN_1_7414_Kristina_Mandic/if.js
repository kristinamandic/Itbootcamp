// 1. Zadatak - Naći i ispisati najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora.
let a = 1;
let b = 7;
let c = 8;
if (a > b && a > c) {
    console.log(`Broj ${a} je najveci broj`);
}
if (b > a && b > c) {
    console.log(`Beoj ${b} je najveci broj `);
}
if (c > a && c > b) {
    console.log(`Broj ${c} je najveci broj`);
}


// 2. Zadatak - Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
let temp = -15;
if (temp < -15 || temp > 40) {
    console.log("Ekstremna temperatura");
}


// 3. Zadatak - Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400.
let god = 2000;
if (god % 4 == 0 && (god % 100 != 0 || god % 400 == 0)) {
    console.log(`Godina ${god} je prestupna`);
}
else {
    console.log(`Godina ${god} nije prestupna`);
}


// 4. Zadatak - Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
let datum = new Date();
let vrijeme = datum.getHours();
let dan = datum.getDay();
if (dan == 0 || dan == 6) {
    if (vrijeme >= 10 && vrijeme < 18) {
        console.log("Butik trenutno radi");
    }
    else {
        console.log("Butik trenutno ne radi");
    }
}
else {
    if (vrijeme >= 9 && vrijeme < 20) {
        console.log("Butik trenutno radi");
    }
    else {
        console.log("Butik trenutno ne radi");
    }
}


// 5. Zadatak - Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg meseca. Rezultat ispisati na ekranu i u konzoli.
let preostaloDana;
let datumDanas = datum.getDate();
let mjesec = datum.getMonth();
god = datum.getFullYear();
mjesec++;
console.log(mjesec);
if (mjesec == 2) {
    if (god % 4 == 0 && (god % 100 != 0 || god % 400 == 0)) {
        preostaloDana = 29 - datumDanas;
    }
    else {
        preostaloDana = 28 - datumDanas;
    }
}
else if (mjesec == 4 || mjesec == 6 || mjesec == 9 || mjesec == 11) {
    preostaloDana = 30 - datumDanas;
}
else {
    preostaloDana = 31 - datumDanas;
}
console.log(`Preostalo je ${preostaloDana} dana do kraja tekuceg mjeseca`);
document.body.innerHTML += `<p>Preostalo je ${preostaloDana} dana do kraja tekuceg mjeseca</p>`


// 6. Zadatak - Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2 površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve v i n određujete sami. Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena.
let v = 15;
let n = 8;
let mpg = n * 3;  // mjesto po gostu - koliko gosti zauzimaju metara kvadratnih u kaficu
let mnk;  // mora napustiti kafic
if (mpg <= v) {
    document.body.innerHTML += `<h1 style="color:limegreen">DA</h1>`
}
else {
    mnk = (mpg - v) / 3;
    document.body.innerHTML += `<h1 style="color:red">NE</h1>`
    document.body.innerHTML += `<p style="color:red">Kafic mora da napusti ${mnk} ljudi</p>`
}


// 7. Zadatak - Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se njihove smene preklapaju.
let pocSatLek1 = 10;
let pocMinLek1 = 0;
let krajSatLek1 = 22;
let krajMinLek1 = 0;

let pocSatLek2 = 8;
let pocMinLek2 = 0;
let krajSatLek2 = 23;
let krajMinLek2 = 1;
let spz;  // sati provedeni zajedno
let mpz;  // minuti provedeni zajedno
document.body.innerHTML += `<p>Prvi lekar pocinje sa radom u ${pocSatLek1}:${pocMinLek1}</p>`
document.body.innerHTML += `<p>Prvi lekar zavrsava sa radom u ${krajSatLek1}:${krajMinLek1}</p>`
document.body.innerHTML += `<p>Drugi lekar pocinje sa radom u ${pocSatLek2}:${pocMinLek2}</p>`
document.body.innerHTML += `<p>Drugi lekar zavrsava sa radom u ${krajSatLek2}:${krajMinLek2}</p>`

// Kada prvi lekar pocinje smjenu prije drugog lekara, a zavrsava je za vrijeme trajanje smjene drugog lekara
if (pocSatLek1 < pocSatLek2 && krajSatLek2 > krajSatLek1) {
    vpz = krajSatLek1 - pocSatLek2;
    mpz = krajMinLek1 - pocMinLek2;
    if (mpz < 0) {
        vpz--;
        mpz += 60;
    }
    document.body.innerHTML += `<p>Prvi i drugi lekar su na poslu zajedno proveli ${vpz} sati i ${mpz} minuta </p>`
}

//Kada za vrijeme trajanja smjene prvog lekara smjena drugog lekara pocne i zavrsi se
else if (pocSatLek1 < pocSatLek2 && krajSatLek1 > krajSatLek2) {
    vpz = krajSatLek2 - pocSatLek2;
    mpz = pocMinLek2 + krajMinLek2;
    if (mpz >= 60) {
        vpz++;
        mpz -= 60;
    }
    document.body.innerHTML += `<p>Prvi i drugi lekar su na poslu zajedno proveli ${vpz} sati i ${mpz} minuta </p>`
}

// Kada drugi lekar pocinje smjenu prije prvog lekara, a zavrsava je za vrijeme trajanje smjene prvog lekara
else if (pocSatLek2 < pocSatLek1 && krajSatLek1 > krajSatLek2) {
    vpz = krajSatLek2 - pocSatLek1;
    mpz = krajMinLek2 - pocMinLek1;
    if (mpz < 0) {
        vpz--;
        mpz += 60;
    }
    document.body.innerHTML += `<p>Prvi i drugi lekar su na poslu zajedno proveli ${vpz} sati i ${mpz} minuta </p>`
}

//Kada za vrijeme trajanja smjene drugog lekara smjena prvog lekara pocne i zavrsi se
else if (pocSatLek2 < pocSatLek1 && krajSatLek2 > krajSatLek1) {
    vpz = krajSatLek1 - pocSatLek1;
    mpz = pocMinLek1 + krajMinLek1;
    if (mpz >= 60) {
        vpz++;
        mpz -= 60;
    }
    document.body.innerHTML += `<p>Prvi i drugi lekar su na poslu zajedno proveli ${vpz} sati i ${mpz} minuta </p>`
}
else {
    document.body.innerHTML += `<p>Nema preklapanja u radnom vremenu lekara</p>`
}


// 8. Zadatak - Za uneta dva broja i karakter napraviti kalkulator koji vrši:
a = 5;
b = 7;
let komanda = "m"; // komanda = karakter
let rezultat;
if (komanda == "m") {
    rezultat = a * b;
    console.log(`Peoizvod brojeva ${a} i ${b} je ${rezultat}`);
}
else if (komanda == "d") {
    rezultat = a / b;
    console.log(`Kolicnik brojeva ${a} i ${b} je ${rezultat}`);
}
else if (komanda == "s") {
    rezultat = a + b;
    console.log(`Suma brojeva ${a} i ${b} je ${rezultat}`);
}
else if (komanda == "o") {
    rezultat = a - b;
    console.log(`Razlika izmedju brojeva ${a} i ${b} je ${rezultat}`);
}
else {
    console.log("Uneli ste pogresnu komandu");
}