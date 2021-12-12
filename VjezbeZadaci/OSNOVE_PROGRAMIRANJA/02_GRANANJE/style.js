// 1. Zadatak - Za dva uneta broja ispisati koji je veći a koji je manji.
let br1 = 8;
let br2 = 8;
if (br1 > br2) {
    console.log(`${br1} je veci od ${br2}`);
    console.log(`${br2} je manji od ${br1}`);
}
else if (br2 > br1) {
    console.log(`${br2} je veci od ${br1}`);
    console.log(`${br1} je manji od ${br2}`);
}
else {
    console.log(`${br1} i ${br2} su jednaki`);
}


// 2. Zadatak - Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let temp = -6;
if (temp >= 0) {
    console.log(`Temperatura je u plusu`);
}
else {
    console.log(`Temperatura je u minusu`);
}


// 3. Zadatak - U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.
let pol = "z";
if (pol == "m" || pol == "M") {
    document.body.innerHTML += `<img src="slike/m.png" width="30%">`
}
else if (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") {
    document.body.innerHTML += `<img src="slike/z.png" width="30%">`
}
else {
    console.log("Pogresan unos");
}


// 4. Zadatak - U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.
let datum = new Date();
let vrijeme = datum.getHours();
if (vrijeme >= 5 && vrijeme <= 12) {
    console.log("Trenutno je jutro");
}
else if (vrijeme > 12 && vrijeme <= 18) {
    console.log("Trenutno je popodne");
}
else {
    console.log("Trenutno je noc");
}


// 5. Zadatak - Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
let godSada = datum.getFullYear();
let godRodj = 1998;
if (godSada - godRodj >= 18) {
    console.log("Osoba je punoljetna");
}
else {
    console.log("Osoba je maloljetna");
}


// 24. Zadatak - Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke.
let a = 6;
let b = 5;
let c = 10;
let d = 9;
let dsa2 = 0;
let dsa5 = 0;
let dsa2i5 = 0;
if (a % 2 == 0) {
    dsa2++;
    dsa2i5++;
    if (a % 5 == 0) {
        dsa5++;
    }
}
else if (a % 5 == 0) {
    dsa5++;
    dsa2i5++;
}
if (b % 2 == 0) {
    dsa2++;
    dsa2i5++;
    if (b % 5 == 0) {
        dsa5++;
    }
}
else if (b % 5 == 0) {
    dsa5++;
    dsa2i5++;
}
if (c % 2 == 0) {
    dsa2++;
    dsa2i5++;
    if (c % 5 == 0) {
        dsa5++;
    }
}
else if (c % 5 == 0) {
    dsa5++;
    dsa2i5++;
}
if (d % 2 == 0) {
    dsa2++;
    dsa2i5++;
    if (d % 5 == 0) {
        dsa5++;
    }
}
else if (d % 5 == 0) {
    dsa5++;
    dsa2i5++;
}
console.log(`Ima ${dsa2i5} brojeva djeljivih sa 2 i 5, od toga ${dsa2} brojeva djeljivih sa 2 i ${dsa5} brojeva djeljivih sa 5`);


// 25. Zadatak - Za tri učitana broja x, y, z ispitati da li je jedan od njih jednak sumi druga dva.
let x = 6;
let y = 3;
let z = 5;
let max;
if (x > y && x > z) {
    max = x;
}
else if (y > x && y > z) {
    max = y;
}
else if (z > x && z > y) {
    max = z;
}
if (max == x + y || max == x + z || max == y + z) {
    console.log(`Broj ${max} je jednak sumi druga dva broja`);
}


// 26. Zadatak - Napisati program koji za uneta tri realna broja određuje zbir dva najveća.
x = 14;
y = 15;
z = 13;
let zbir;
let sred;
if (x > y) {
    max = x;
    if (max < z) {
        max = z;
        sred = x;
    }
    else if (z > y) {
        sred = z;
    }
    else {
        sred = y;
    }
}
else if (y > x) {
    max = y;
    if (max < z) {
        max = z;
        sred = y;
    }
    else if (z > x) {
        sred = z;
    }
    else {
        sred = x;
    }
}
else if (z > x) {
    max = z;
    if (max < y) {
        max = y;
        sred = z;
    }
    else if (y > x) {
        sred = x;
    }
    else {
        sred = y;
    }
}
zbir = max + sred;
console.log(zbir);


//////////////////////////////////////
// Zadaci za vjezbu:
// NAREDBA IF... THEN
// 3. Napisati program koji proverava da li je zbir dva broja deljiv sa tri ili nije. Ispisati poruku: 'Jeste' ili 'Nije'.
br1 = 5;
br2 = 5;
if ((br1 + br2) % 3 == 0) {
    console.log("Jeste");
}
else {
    console.log("Nije");
}


//4. Napisati program koji treba izračunati koren broja x ako je taj broj pozitivan, a inače ispisati poruku: 'Nema realnog rešenja'.
x = 324;
if (x > 0) {
    console.log(Math.sqrt(x));
}
else {
    console.log("Nema realnog rjesenja");
}


// 5. Napisati program kojim se unose dva pozitivna, cela broja a i b. Napisati program koji izračunava i štampa površinu jednakostraničnog trougla ako su brojevi jednaki (stranica je jednaka datim brojevima), odnosno površinu pravougaonika ako su brojevi različiti (stranice pravougaonika su jednake datim brojevima).
a = 3;
b = 4;
let povrsina;
if (a > 0 && b > 0 && a % 1 == 0 && b % 1 == 0) {
    if (a == b) {
        povrsina = Math.sqrt(3) / 4 * a * a;
        console.log(`Povrsina jednakostranicnog trougla je ${povrsina}`);
    }
    else {
        povrsina = a * b;
        console.log(`Povrsina pravougaonika je ${povrsina}`);
    }
}
else {
    console.log("Niste ispravno unijeli brojeve");
}


// 8. Napisati program koji za dato x izračunava y po formuli:
x = -3 / 4;
if (x == -3 / 2) {
    y = 0;
    console.log(y);
}
else {
    y = 1 / (2 * x + 3);
    console.log(y);
}


// 9. Data su tri ugla α, β, γ. Napisati program koji ispituje da li dati uglovi mogu biti uglovi trougla i ako mogu ispisati poruku: 'Mogu', a inače ispisati poruku: 'Ne mogu'.
a = 45;
let ss = 60;
y = 75;
if (a + ss + y == 180) {
    console.log("Mogu");
}
else {
    console.log("Ne mogu");
}


// 11. Napisati program kojim se unosi ceo broj X, a zatim ako je broj različit od 0 ispisuje njegova recipročna vrednost, a inače ispisuje poruka: 'Nemogude je deliti nulom'.
// Reciprocna vrijednost - broj koji kada se pomnozi sa brojem x daje 1
x = 2;
let rv; // reciprocna vrijednost
let provjera;
if (x != 0) {
    rv = 1 / x;
    console.log(rv);
    provjera = rv * x;
    console.log(provjera);
}
else {
    console.log("Nemoguce je dijeliti nulom");
}


// 12. Za uneta dva cela broja x i y izračunati z na slededi način:
x = 9;
y = 8;
if (x <= y) {
    z = x - y;
    console.log(z);
}
else {
    z = x + y;
    console.log(z);
}


// 13. Proveriti da li je uneti broj x pripada intervalu (10,50]. Ispisati poruku: 'Pripada', a inače poruku: 'Ne pripada'.
// () - znace da se ide od tog broja ali ne ukljucuje taj broj
// [] - znaci da ukljucuje taj broj
x = 23;
if (x > 10 && x <= 50) {
    console.log("Pripada");
}
else {
    console.log("Ne pripada");
}


// 14. Napisati program koji za uneti realan broj a izračunava b na slededi način:
a = 1;
if (a >= -2 && a < 2) {
    b = Math.sqrt(a + 8);
    console.log(b);
}
else {
    b = a * a;
    console.log(b);
}


// 15. Napisati program kojim se promenljivoj min dodeljuje vrednost manjeg između brojeva a i b.
a = 6;
b = 6;
let min;
if (a < b) {
    min = a;
    console.log(`${a} je manji od ${b} = ${min}`);
}
else if (b < a) {
    min = b;
    console.log(`${b} je manji od ${a} = ${min}`);
}
else {
    console.log(`${a} i ${b} su jednaki`);
}


// NAREDBA CASE
// 3. Napisati program koji de, ako je unet redni broj meseca, rečima ispisati kojem godišnjem dobu mesec pripada.
let mjesec = 5;
switch (mjesec) {
    case 12:
    case 1:
    case 2:
        console.log("Zima");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Proljece");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Ljeto");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Jesen");
        break;
    default:
        console.log("Pogresan unos");
}
console.log(`Ima ${dsa2i5} brojeva djeljivih sa 2 i 5, od toga ${dsa2} brojeva djeljivih sa 2 i ${dsa5} brojeva djeljivih sa 5`);