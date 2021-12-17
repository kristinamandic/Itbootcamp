console.log("Funkcije");

function zdravo() {
    console.log("Zdravo svijete!!!");
}
// Izmedju viticastih zagrada se nalazi tijelo funkcije
// Svaki put kada pozovemo funkciju njenim imenom izvrsi se njeno tijelo funkcije
zdravo();
zdravo();
console.log("Hello");
zdravo();


let tekst = "Jelena";
// Kada je u zagradi promjenljiva ta promjenljiva poprima vrijednost koja je ispisana dolje, da nema promjenljive tekst u zagradi poslije stampaj, kada se pozove funkcija stampaj ispisivala bi samo jelena
function stampaj(tekst) {
    console.log(tekst);
}

stampaj("Jelena");
stampaj("Stefan");
let ime = "Sofija";
stampaj(ime);

////////////////////////////////////////

function korisnik(ime, prezime) {
    console.log(`Ulogovani koristik je ${ime} ${prezime}`);
}
korisnik("Kristina", "Mandic");
korisnik("Jelena", "Matejic");

///////////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godine`);
}
korisnikGodine("Kristina", "Mandic", 23);
korisnikGodine("Pera", "Peric", 32);

///////////////////////////////////////

// Ranije smo ovako
let x = 5;
let y = 7;
let z = x + y;
console.log(z);

x = 6;
y = 4;
z = x + y;
console.log(z);

x = 2;
y = -9;
z = x + y;
console.log(z);


function zbirDvaBroja(x, y) {  // viticaste zagrade = scoup = tijelo funkcije
    let zbir = x + y;
    console.log(zbir);  // ispisuje vrijednost
}
zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);

///////////////////////////////////////

function vratiZbirDvaBroja(a, b) {  // promjenljiva sa let vazi samo u ovom bloku
    let zbir = a + b;
    // console.log("Vrati zbir");
    return zbir;  // vraca vrijednost - ne moze dva puta nego samo jednom - kada kazemo return, return se izvrsava, a funkcija se prekida
    // ono sto ona vraca mi moramo da stavimo u neku promjenljivu
    // console.log("Vrati zbir iza return"); // nikada se ne izvrsi
}

let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);
rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6);  // rez1 = 10
let rez2 = vratiZbirDvaBroja(5, 7);  // rez2 = 12
let rez3 = vratiZbirDvaBroja(rez1, rez2);  // rez3 = 22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);  // rez4 = 13
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);  // rez5 = 19
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));  // rez6 = 11
console.log(rez6);

///////////////////////////////////////

function voda(temperatura) {
    console.log(`Unjeli ste temperaturu od ${temperatura} stepeni C`);
    if (temperatura <= 0) {
        console.log("Voda je u cvrstom agregatnom stanju");
    }
    else if (temperatura >= 100) {
        console.log("Voda je u gasovitom agregatnom stanju");
    }
    else {
        console.log("Voda je u tecnom agregatnom stanju");
    }
}

voda(3);
voda(100);


///////////////////////////////////////
// VJEZBANJE
// 2. Zadatak - Napisati funkciju zbir koja računa zbir dva realna broja.Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

// function zbir(br1, br2) {
//     zbir = br1 + br2;
//     razlika = br1 - br2;
//     proizvod = br1 * br2;
//     kolicnik = br1 / br2;
// }

// zbir(5, 4);
// console.log(razlika);

function racunaj(br1, br2, operacija) {
    if (operacija == "+") {
        let rezultat = br1 + br2;
        console.log(rezultat);
    }
    else if (operacija == "-") {
        let rezultat = br1 - br2;
        console.log(rezultat);
    }
    else if (operacija == "*") {
        let rezultat = br1 * br2;
        console.log(rezultat);
    }
    else if (operacija == "/") {
        if (br2 == 0) {
            console.log("Djeljenje nulom nije dozvoljeno");
        }
        else {
            let rezultat = br1 / br2;
            console.log(rezultat);
        }
    }
    else {
        console.log("Pogresan unos");
    }
}
racunaj(4, 2, "+");
racunaj(4, 2, "-");
racunaj(4, 2, "*");
racunaj(4, 2, "/");
racunaj(4, 2, "%");
racunaj(5, 0, "/");



// 3. Zadatak - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if (n % 2 != 0) {
        return true;  // neparan broj  
    }
    else {
        return false;  // ili return "netacno"
    }
}
let nep = neparan(13);
console.log(nep);


function neparan1(n) {
    let rez = true;
    if (n % 2 == 0) {
        rez = false;
    }
    return rez;
}
let nep1 = neparan1(6);
console.log(nep1);


function neparan2(n) {
    return n % 2 != 0;
}
let nep2 = neparan2(63);
console.log(nep2);


// 4. Zadatak - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function max2(a, b) {
    if (a > b) {
        return a;
    }
    else if (b > a) {
        return b;
    }
    else {
        return "Brojevi su jednaki";
    }
}

let veciBroj = max2(5, 5);
console.log(veciBroj);

function max4(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    }
    else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    }
    else if (d > a && d > b && d > c) {
        return d;
    }
    else {
        return "Pogresan unos, ili su brojevi jednaki"
    }
}

let veciBroj2 = max4(10, 2, 16, 1);
console.log(veciBroj2);


// 5. Zadatak - Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(adresa) {
    document.body.innerHTML += `<img src="${adresa}">`
}




// 6. Zadatak - Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function bojenje(boja) {
    document.body.innerHTML += `<p style="color:${boja}">Tekst</p>`
}

bojenje("red");


// 7. Zadatak - Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini? - Isto

function sedmiDan(n) {
    switch (n) {
        case 0:
        case 7:
            console.log('Nedelja');
            break;
        case 1:
            console.log('Ponedeljak');
            break;
        case 2:
            console.log('Utorak');
            break;
        case 3:
            console.log('Srijeda');
            break;
        case 4:
            console.log('Cetvrtak');
            break;
        case 5:
            console.log('Petak');
            break;
        case 6:
            console.log('Subota');
            break;
        default:
            console.log('Pogresan unos');
    }
}

sedmiDan(7);


// 8. Zadatak - Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

function djeljivSaTri(n, m) {
    let brBr = 0;
    for (i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            brBr++;
        }
    }
    console.log(`Ima ${brBr} brojeva koji su djeljivi sa 3`);
}

djeljivSaTri(3, 9);


// 9. Zadatak - Napisati funkciju sumiraj koja određuje sumu brojeva od n do m.  Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    let suma = 0;
    for (i = n; i <= m; i++) {
        suma += i;
    }
    console.log(suma);
}

sumiraj(5, 10);



// 13. Zadatak - 


// 14. Zadatak - Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 


// 15. Zadatak - Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami. Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

function praksa(n, a, d) {
    let povisica = a + d;
    let plata = 0;
    for (i = 1; i <= n; i++) {
        plata += povisica;
    }
    plata1 = plata - povisica + a;
    return plata1;
}

let nesto = praksa(2, 300, 20);
console.log(nesto);


// 16. Zadatak 

let t = 15;  // vrijeme do mosta
let p = 10;  // kada se most podize
let n = 12;  // podizanje i spustanje mosta - prelazak nemoguc
let cekanje;

if (p > t || t >= p + n) {
    console.log("Cekanje je 0 sekundi");
}
else {
    cekanje = n + p - t;
    console.log(`Cekanje je ${cekanje} sekundi`);
}