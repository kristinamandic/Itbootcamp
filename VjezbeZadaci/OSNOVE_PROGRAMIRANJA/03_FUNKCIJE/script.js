// 1. Zadatak - Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m. Pozvati funkciju i njen rezultat ispisati u konzoli.

let suma = (n, m) => {
    let zbir = 0;
    for (let i = n; i <= m; i++) {
        zbir += (i * i * i);
    }
    return zbir;
}

console.log(suma(1, 3));

function suma1(n, m) {
    let zbir = 0;
    for (let i = n; i <= m; i++) {
        zbir += (i * i * i);
    }
    return zbir;
}

console.log(suma1(1, 3));

// 2. Zadatak - Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja. Parametar godRodjenja predstavlja godinu rođenja neke osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba.  Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara.  Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

let godine = godRodjenja => {
    let datum = new Date();
    let godSada = datum.getFullYear();
    return godSada - godRodjenja;
}

console.log(godine(1998));


// 3. Zadatak - Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

let djeljiv = (n, m, k) => {
    let broj = 0;
    for (let i = n; i <= m; i++) {
        if (i % k == 0) {
            broj++;
        }
    }
    console.log(broj);
}

djeljiv(3, 25, 5);


// 4. Zadatak - Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

let pilot = (sp, mp, ss, ms) => {
    let st = ss - sp;  // sati trajanja
    let mt = ms - mp;  // minuti trajanja
    if (mt < 0) {
        mt = 60 + mt;
        st--;
    }
    console.log(`Let je trajao ${st} sati i ${mt} minuta`);
}

pilot(1, 59, 3, 20);


// 5. Zadatak - Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

let jaban = (jabuke, banane) => {
    jabuke = jabuke - jabuke * 0.2;
    banane = banane - banane * 0.2;
    if (jabuke % 1 != 0) {
        if (jabuke % 1 >= 0.5) {
            jabuke = jabuke + (1 - (jabuke % 1));
        }
        else {
            jabuke = jabuke - (jabuke % 1);
        }
    }
    if (banane % 1 != 0) {
        if (banane % 1 >= 0.5) {
            banane = banane + (1 - (banane % 1));
        }
        else {
            banane = banane - (banane % 1);
        }
    }

    let jabukePorcija = (jabuke - (jabuke % 2)) / 2;
    let bananePorcija = (banane - (banane % 3)) / 3;
    let jabat;
    if (jabukePorcija <= bananePorcija) {
        jabat = jabukePorcija;
    }
    else {
        jabat = bananePorcija;
    }
    return jabat;
}
console.log(jaban(400, 50));


// 6. Zadatak - Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d određujete sami. Napišite funkciju praksa kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu u odnosu na prethodni mesec. Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

let prakse = (n, a) => {
    let d = 500;
    let plata = 0;
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            plata += a;
        }
        else {
            a = a + d;
            plata += a;
        }
    }
    return plata;
}

console.log(prakse(3, 1000));


// 7. Zadatak - Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža od druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).

// let fabrika = (a, b, c, d) => {

// }

// console.log(fabrika(4, 3, 2));