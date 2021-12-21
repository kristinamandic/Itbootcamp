let a = [1, 9, -6, 5, 0];
let b = [7, 8, 9];

/*
function ispis(elem) {
    console.log(`Element niza je ${elem}`);
}

a.forEach(ispis);
*/

a.forEach(elem => {
    console.log(`Element: ${elem}`);
});


// ZADACI IZ FOLDERA NIZOVI
// 2. Zadatak - Odrediti zbir cjelobrojnog niza.

let zbir = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
};

console.log(zbir(a));
console.log(zbir(b));

let zbirParnih = niz => {
    let suma = 0;
    niz.forEach(el => {
        if (el % 2 == 0) {
            suma += el;
        }
    });
    return suma;
};

console.log(zbirParnih(a));

let zbirParniIndex = niz => {
    let suma = 0;
    niz.forEach((el, index) => {
        if (index % 2 == 0) {
            suma += el;
        }
    });
    return suma;
};

console.log(zbirParniIndex(a));


// 3. Zadatak - Odrediti proizvod elemenata celobrojnog niza.

let proizvodEl = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod *= el;
    });
    return proizvod;
};

console.log(proizvodEl(a));
console.log(proizvodEl(b));


// 4. Zadatak - Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrijednost = niz => {
    let suma = 0;
    let broj = 0;
    niz.forEach(el => {
        suma += el;
        broj++;
    });
    return suma / broj;
};

console.log(srednjaVrijednost(a));
console.log(srednjaVrijednost(b));


// 5. Zadatak - Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVrijednost = niz => {
    let max = niz[0];
    niz.forEach((el, index) => {
        if (max < niz[index]) {
            max = niz[index];
        }
    });
    return max;
};

/* ili:
let maxVrijednost = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if (max < el) {
            max = el;
        }
    });
    return max;
};
*/

console.log(maxVrijednost(a));
console.log(maxVrijednost(b));


// 6. Zadatak - Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrijednost = niz => {
    let min = niz[0];
    niz.forEach((el, index) => {
        if (min > niz[index]) {
            min = niz[index];
        }
    });
    return min;
};

console.log(minVrijednost(a));
console.log(minVrijednost(b));


// 7. Zadatak - Odrediti indeks maksimalnog elementa celobrojnog niza.

let maxIndex = niz => {
    let max = niz[0];
    let maxI = 0;
    niz.forEach((el, index) => {
        if (max < el) {
            max = el;
            maxI = index;
        }
    });
    return maxI;
};

console.log(maxIndex(a));
console.log(maxIndex(b));


// 8. Zadatak - Odrediti indeks minimalnog elementa celobrojnog niza.

let minIndex = niz => {
    let min = niz[0];
    let minI = 0;
    niz.forEach((el, index) => {
        if (min > el) {
            min = el;
            minI = index;
        }
    });
    return minI;
};

console.log(minIndex(a));
console.log(minIndex(b));


// 7. i 8. Zadatak zajedno
/*
let maxVrijednost = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if (max < el) {
            max = el;
        }
    });
    return max;
};

let minVrijednost = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if (min > el) {
            min = el;
        }
    });
    return min;
};
*/

let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if (el == s) {
            index = i;
        }
    });
    return index;
};

console.log(indexSvojstvo(a, maxVrijednost));
console.log(indexSvojstvo(a, minVrijednost));


// 9. Zadatak - Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti