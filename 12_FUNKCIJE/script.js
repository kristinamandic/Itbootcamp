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

function zbir(br1, br2) {
    zbir = br1 + br2;
    razlika = br1 - br2;
    proizvod = br1 * br2;
    kolicnik = br1 / br2;
}

zbir(5, 4);
console.log(razlika);

// 3. Zadatak - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if (n % 2 == 0) {
        console.log("Neacno");
    }
    else {
        console.log("Tacno");
    }
}

neparan(7);


// 4. Zadatak - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function max2(a, b) {
    if (a > b) {
        console.log(a);
    }
    else if (b > a) {
        console.log(b);
    }
    else {
        console.log(`Brojevi su jednaki ${a}`);
    }
}

max2(4, 7);

function max4(a, b, c, d) {
    if (a > b && a > c && a > d) {
        console.log(a);
    }
    else if (b > a && b > c && b > d) {
        console.log(b);
    }
    else if (c > a && c > b && c > d) {
        console.log(c);
    }
    else {
        console.log(d);
    }
}

max4(3, 5, 1, 9);