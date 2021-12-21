// Elementi niza mogu da budu bilo sta, a ne moraju da budu ni istog tipa
// Svaki element ima svoj indeks - pozicija elementa u nizu
// Indeksiranje pocinje od 0
// Element sa indeksom n je ustv n-1

let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];
console.log(numbers);

let random = [6, "Kristina", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);  // Iz niza cars pristapamo elementu sa indeksom 0
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);  // Pristupanje nepostojecem elementu - undefined

console.log(random[4][1]);  // Pristupanje nizu niza


cars[0] = "Peugeot";  // Mjenjanje elemenata s odredjenim indeksima
console.log(cars);

// cars[0] = undefined;  - Nacin da se ukloni element iz niza


// Prolazenje kroz sve elemente petljom:
for (i = 0; i < cars.length; i++) {  // Bitno je da je strogo manje
    console.log(cars[i]);
}


// 2. Zadatak - Odrediti zbir elemenata celobrojnog niza.
let niz1 = [2, 5, 7, 1];
let niz2 = [3, 5, 7, 2, 4];
let niz3 = [2, 5, 4, 5, 1, 9];


let zbir = 0;
for (i = 0; i < niz1.length; i++) {
    zbir += niz1[i];
}
console.log(zbir);

// Pravljenje funkcije za vise nizova

let sumaElemenata = niz => {
    let suma = 0;
    for (i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}

console.log("Suma elemenata prvog niza je: " + sumaElemenata(niz1));
console.log("Suma elemenata drugog niza je: " + sumaElemenata(niz2));
console.log("Suma elemenata treceg niza je: " + sumaElemenata(niz3));


// 3. Zadatak - Odrediti proizvod elemenata celobrojnog niza.
let cijelobrojniNiz = [1, 2, 3, 3];
let proizvod = 1;
for (i = 0; i < cijelobrojniNiz.length; i++) {
    proizvod *= cijelobrojniNiz[i];
}
console.log(proizvod);


let proizvodElemenata = niz => {
    let proizvod = 1;
    for (i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}

console.log(proizvodElemenata(niz1));
console.log(proizvodElemenata(niz2));
console.log(proizvodElemenata(niz3));


// 4. Zadatak - Odrediti srednju vrednost(aritmeticku sredinu) elemenata celobrojnog niza.
let niz4 = [1, 2, 3, 4, 5, 6, 7];
let suma = 0;
let br = 0;
for (i = 0; i < niz4.length; i++) {
    br++;
    suma += niz4[i];
}
let arSred = suma / br;
console.log(arSred);

///////////////
let arSr = niz => {
    let suma = 0;
    let broj = 0;
    for (i = 0; i < niz.length; i++) {
        suma += niz[i];
        broj++;
    }
    return (broj != 0) ? (suma / broj) : 0;
}

console.log(arSr(niz4));
console.log(arSr(niz2));

/////////////
let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;
}

console.log(arSr2(niz1));
console.log(arSr2(niz2));

//////////////
let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;


console.log(arSr3(niz1));
console.log(arSr3(niz2));


// 4'. Odrediti srednju vrijednost parnih elemenata

let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            broj++;
        }
    }
    return broj == 0 ? 0 : suma / broj;
}

console.log(arSrParnih(niz1));
console.log(arSrParnih(2, 4, 1));


// 5. Zadatak - Odrediti maksimalnu vrednost u celobrojnom nizu.
let niz = [9, 1, 10, 3];

let maxVrijednost = niz => {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

console.log(maxVrijednost(niz));


// 6. Zadatak - Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrijednost = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

console.log(minVrijednost(niz));


// 7. Zadatak - Odrediti indeks maksimalnog elementa celobrojnog niza.
let niz10 = [4, 3, 2, 1]

let indexMaxVrijednost = niz => {
    let maxBr = niz[0];
    let max = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > maxBr) {
            max = i;
            maxBr = niz[i];
        }
    }
    return max;
}

console.log(indexMaxVrijednost(niz10));


// 8. Zadatak - Odrediti indeks minimalnog elementa celobrojnog niza.

let indexMinVrijednosti = niz => {
    let minBr = niz[0];
    let min = 0;
    for (i = 1; i < niz.length; i++) {
        if (minBr > niz[i]) {
            min = i;
        }
    }
    return min;
}

console.log(indexMinVrijednosti(niz10));


// 9. Zadatak - Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brojElemenata = niz => {
    let broj = 0;
    let srVr = arSr(niz)
    for (i = 0; i < niz.length; i++) {
        if (niz[i] > srVr) {
            broj++;
        }
    }
    return broj;
}
console.log(arSr(niz4));
console.log(brojElemenata(niz4));


// 10. Zadatak - Izračunati zbir pozitivnih elemenata celobrojnog niza.

let pozitivniElementi = niz => {
    let suma = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(pozitivniElementi(niz4));


// 11. Zadatak -  Odrediti broj parnih elemenata u celobrojnom nizu.


let parniElementi = niz => {
    let broj = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            broj++;
        }
    }
    return broj;
}

console.log(parniElementi(niz4));


// Zadatak - Odrediti brpj maksimalnih elemenata cjelobrojnog liza

let brMaks = niz => {
    let maks = niz[0];
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > maks) {
            maks = niz[i];
        }
    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == maks) {
            br++;
        }
    }
    console.log(br);
}

brMaks(niz4);


// 16. Zadatak - Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = ["jaja", "mlijeko", "brasno", "secer", "sir"];
/*
let kupovinaLista = niz => {
    for (let i = 0; i < niz.length; i++) {
        document.body.innerHTML += `<li>${niz[i]}</li>`
    }
}
*/

let kupovinaLista = niz => {
    rezultat = "";
    rezultat += "<ul>";
    for (let i = 0; i < niz.length; i++) {
        rezultat += `<li>${niz[i]}</li>`;
    }
    rezultat += "</ul>";
    return rezultat;
}


// document.body.innerHTML += kupovinaLista(kupovina);
document.getElementById('d1').innerHTML += kupovinaLista(kupovina);


// 17. Zadatak - Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let kosarkasi = ["Ivan", "Nikola", "Matija", "Pavle"];

let kosarkasiTabela = niz => {
    let tabela = `<table border = "1">`;
    for (let i = 0; i < niz.length; i++) {
        tabela += `<tr>
        <td>${niz[i]}</td>
        </tr>`
    }
    tabela += `</table>`;
    document.body.innerHTML += tabela;
}

kosarkasiTabela(kosarkasi);


// 18. Zadatak - Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let putanje = ["https://assets3.thrillist.com/v1/image/2870172/828x610/flatten;crop;webp=auto;jpeg_quality=70", "https://picturedrocks.com/wp-content/uploads/2021/05/Pictured-Rocks-Spray-Falls.jpg", "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/ad661f30c8/width2048/633_picturedrocks.jpeg"];

let slike = niz => {
    for (let i = 0; i < niz.length; i++) {
        document.body.innerHTML += `<img src="${niz[i]}"/>`
    }
}

slike(putanje);


// 19. Zadatak - Ispisati dužinu svakog elementa u nizu stringova. 
let stringovi = ["Cokolada", "Torta", "Keks", "Bombon", "Voce"];

let duzinaStringova = niz => {
    let length = "";
    for (let i = 0; i < niz.length; i++) {
        // console.log(niz[i].length);
        length += niz[i].length + " ";
    }
    console.log(length);
}

duzinaStringova(stringovi);


// 20. Zadatak - Odrediti element u nizu stringova sa najvećom dužinom.

let najvecaDuzina = niz => {
    let maks = niz[0].length;
    let element = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (maks < niz[i].length) {
            maks = niz[i].length;
            element = niz[i];
        }
    }
    console.log(element);
}

najvecaDuzina(stringovi);


// 21. Zadatak - Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let prosjecnaDuzina = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].length;
        broj++;
    }
    let prDu = suma / broj; // prosjecna duzina
    let veciOdProsjeka = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > prDu) {
            veciOdProsjeka++;
        }
    }
    console.log(veciOdProsjeka);
}

prosjecnaDuzina(stringovi);


// 22. Zadatak - Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
//let stringovi = ["Cokolada", "Torta", "Keks", "Bombon", "Voce"];

let slovoA = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].indexOf("a") != -1) {
            broj++
        }
    }
    console.log(broj);
}

/*
let slovoA = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes("a")) {
            broj++
        }
    }
    console.log(broj);
}
*/

slovoA(stringovi);


// 23. Zadatak - Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let pocetnoSlovoA = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].charAt(0) == "a" || niz[i].charAt(0) == "A") {
            broj++;
        }
    }
    console.log(broj);
}

pocetnoSlovoA(stringovi);


// 24. Zadatak

// let a = [1, 3, 5, 7];
// let b = [2, 3, 4, 6];

// let c = (a, b) => {
//     for (let i = 0; i < b.length; i++) {
//     }

// }