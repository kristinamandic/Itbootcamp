let niz1 = [2, 3, 7, 9, 1];
let niz2 = [12, 3, 5];
let niz3 = [-1, 4, 11, 0, 8];

//1. Zadatak -  Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom

let sumaElemenata = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(sumaElemenata(niz1));
console.log(sumaElemenata(niz2));
console.log(sumaElemenata(niz3));


// 2. Zadatak - Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.

let promjenaZnaka = niz => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {
            niz[i] = -niz[i];
        }
    }
    console.log(niz);
}

promjenaZnaka(niz1);
promjenaZnaka(niz2);
promjenaZnaka(niz3);


// 3. Zadatak - Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.

let neparniIndeks = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            broj++;
        }
    }
    return broj;
}

console.log(neparniIndeks(niz1));
console.log(neparniIndeks(niz2));
console.log(neparniIndeks(niz3));