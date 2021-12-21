/*
function ispisKonzola(niz) {
    let rezultat = "";
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i] + " ";
    }
    console.log(rezultat);
}

function ispisHTML(niz) {
    let rezultat = "";
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i] + " ";
    }
    document.body.innerHTML += `<div>${rezultat}</div>`;
}

let brojevi = [1, 6, -4, 9];
ispisKonzola(brojevi);
ispisHTML(brojevi);
*/

// Ispisivanje prethodnih kodova preko callback funkcije

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
}

function ispisNiza(niz, callback) { // drugi parametar moze da se zove bilo kako, to je funkcija koja ce se kasnije pozivati
    let rezultat = "";
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i] + " ";
    }
    callback(rezultat);
}

let brojevi = [1, 6, -4, 9];
ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);


// Isti zadatak - Preko anonimnih funkcija - njihova prava namjena

ispisNiza(brojevi, function (poruka) {
    console.log(poruka);
});

ispisNiza(brojevi, function (poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});


// Isti zadatak - Preko arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
});



// Odreduti broj maksimalnih elemenata i broj minimalnih elemenata u cijelobrojnom nizu
// Nije ti ovo bas dobro kiki, ali okej razmisljanje
/*
function maxVrijednost(niz, callback) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }
    }
    callback(max);
}

function minVrijednost(niz, callback) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
        }
    }
    callback(min);
}

function jednakeVrijednosti(vrijednost) {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (vrijednost == niz[i]) {
            broj++;
        }
    }
    console.log(broj);
}

let niz = [1, 1, 1, 1, 1, 1, 1, 3, 7, 8, 2, 8, 8, 5, 5, 5, 5, 1, 5];
minVrijednost(niz, jednakeVrijednosti);
maxVrijednost(niz, jednakeVrijednosti);
*/

function maxVrijednost(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }
    }
    return max;
}

function minVrijednost(niz) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
        }
    }
    return min;
}

function jednakeVrijednosti(niz, vrijednost) {
    let v = vrijednost(niz);  // smjesta rezultat poziva ove fukncije
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (v == niz[i]) {
            broj++;
        }
    }
    return broj;
}


let niz1 = [1, 1, 1, 1, 1, 1, 3, 7, 8, 2, 8, 8, 5, 5, 5, 5, 1, 5, 8];

console.log(jednakeVrijednosti(niz1, maxVrijednost));
console.log(jednakeVrijednosti(niz1, minVrijednost));