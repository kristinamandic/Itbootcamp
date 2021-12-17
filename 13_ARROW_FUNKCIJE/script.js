function suma(a, b) {  // Definijcija funkcije:
    return a + b;
}

console.log(suma(4, 5));  // Poziv funkcije - pozivom se realizuje funkcionalnost funkcije
console.log(suma(1, 0));  // Poziv funkcije


// ANONIMNE FUNKCIJE - funkcije koje nemaju ime

// Smjestanje funkcije u promjenljivu
let suma2 = function (a, b) {
    return a + b;
}

console.log(suma2(6, 6));


// ARROW FUNKCIJA - skracen zapis anonimnih funkcija
// Zbog simbola => (fat arrow) se zovu arrow

let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(5, 3));


// Arrow funkcija za ispis poruke
let hello = () => {
    console.log("Hello world!");
}

hello();

// Arrow funkcija za ispisivanje dva stringa

let pozdrav = (ime, prezime) => {
    console.log(`Zdravo ${ime} ${prezime}`);
    // console.log("Zdravo " + ime + " " + prezime);
}

pozdrav("Kristina", "Mandic");
pozdrav("Jelena", "Matejic");


// Arrow funkcija kojoj se prosljedjuje ime i godine korisnika,
// a ona ispisuje ime i da li je korisnik punoljetan ili ne

let ispis = (ime, godine) => {
    if (godine < 18) {
        let poruka = `Korisnik je ${ime} je maloljetna osoba`;
        document.body.innerHTML += `<p style="color:blue">${poruka}</p>`;
    }
    else {
        let poruka = `Korisnik je ${ime} je punoljetna osoba`;
        document.body.innerHTML += `<p style="color:green">${poruka}</p>`;
    }
}

ispis("Kristina", 23);
ispis("Pera", 14);


// VJEZBANJE
// 3. Zadatak - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
/*
let neparan = (n) => {
    if (n % 2 != 0) {
        return "Tacno";
    }
    else {
        return "Netacno";
    }
}

console.log(neparan(2));

let paran = n => return (n % 2 == 0) ? true : false;
*/

let paran = n => (n % 2 == 0);

console.log(paran(6));

// 4. Zadatak - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
/*
let max2 = (a, b) => {
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

let max2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
*/

/* terinarni operator u js je 
let max2 = (a, b) => {
    return (a > b) ? a : b;
}
*/

let max2 = (a, b) => (a > b) ? a : b;

console.log(max2(16, 19));

/*
let max4 = (a, b, c, d) => {
    if (a >= b && a >= c && a >= d) {
        return a;
    }
    else if (b >= a && b >= c && b >= d) {
        return b;
    }
    else if (c >= a && c >= b && c >= d) {
        return c;
    }
    else if (d >= a && d >= b && d >= c) {
        return d;
    }
    else {
        return "Pogresan unos"
    }
}

console.log(max4(11, 10, 9, 12));

let max4 = (a, b, c, d) => {
    let m1 = max2(a, b);
    let m2 = max2(c, d);
    let m = max2(m1, m2);
    return m;
}
*/

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

console.log(max4(6, 7, 9, 12));

// Drugi nacin
let max4DN = (a, b, c, d) => max2(max2(max2(a, b), c), d);

console.log(max4DN(6, 7, 9, 12));

// 5. Zadatak - Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = (adresa) => {
    document.body.innerHTML += `<img src="${adresa}"/>`
}

slika("https://staticstvarukusa.mondo.rs/Picture/15398/jpeg/psizzaaa.jpg");

// drugi nacin

let slika2 = (adresa) => {
    return `<img src="${adresa}"/>`;
}

document.body.innerHTML += slika2("https://delimanors.azureedge.net/media/article/image/cache/580x436/h/i/historyofpizza_8611155.jpg");

// treci nacin - kada ima samo retun - skracenje

let slika3 = (adresa) => `<img src="${adresa}"/>`

document.body.innerHTML += slika2("https://rs.n1info.com/wp-content/uploads/2017/02/pica-108329.jpeg");

// cetvrti nacin - kada imamo jedan parametar - dodatno skracenje

let slika4 = adresa => `<img src="${adresa}"/>`

document.body.innerHTML += slika2("https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/h61/he3/8814902706206.jpg?buildNumber=61e31e2ae38f8b62be4419800a19c56cc7f8d3c92b97c13370eb53cbc6d17700");


// 6. Zadatak - Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let bojaParagrafa = (boja) => {
    document.body.innerHTML += `<p style="color:${boja}">Tekst paragrafa</p>`
}

bojaParagrafa("blue");


// 7. Zadatak - Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
/*
let sedmiDan = (n) => {
    if (n % 7 == 0) {
        return "Nedelja";
    }
    else if (n % 7 == 1) {
        return "Ponedeljak";
    }
    else if (n % 7 == 2) {
        return "Utorak";
    }
    else if (n % 7 == 3) {
        return "Srijeda";
    }
    else if (n % 7 == 4) {
        return "Cetvrtak";
    }
    else if (n % 7 == 5) {
        return "Petak";
    }
    else {
        return "Subota";
    }
}

console.log(sedmiDan(0));

let sedmiDan = n => {
    let dan = n % 7;
    if (dan == 0) {
        return "Nedelja";
    }
    else if (dan == 1) {
        return "Ponedeljak";
    }
    else if (dan == 2) {
        return "Utorak";
    }
    else if (dan == 3) {
        return "Srijeda";
    }
    else if (dan == 4) {
        return "Cetvrtak";
    }
    else if (dan == 5) {
        return "Petak";
    }
    else {
        return "Subota";
    }
}
*/

let sedmiDan = n => (n % 7 == 0) ? "Nedelja" : (n % 7 == 1) ? "Ponedeljak" : (n % 7 == 2) ? "Utorak" : (n % 7 == 3) ? "Srijeda" : (n % 7 == 4) ? "Cetvrtak" : (n % 7 == 5) ? "Petak" : "Subota";

console.log(sedmiDan(6));

// 8. Zadatak - Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

let djeljivSaTri = (n, m) => {
    let brojevi = 0;
    for (i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            brojevi++;
        }
    }
    console.log(`Ima ${brojevi} brojeva djeljivih sa 3`);
}

djeljivSaTri(3, 12);

// 9. Zadatak - Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
