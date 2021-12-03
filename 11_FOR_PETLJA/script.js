let a = 1;
while (a <= 5) {
    console.log(`Na redu je broj ${a}`);
    a++;
}

for (let i = 1; i <= 5; i++) {
    console.log(`For perlja iteracija ${i}`);
}


// 2. Zadatak - Ispisati brojeve od 20 do 1

for (i = 20; i >= 1; i--) {
    console.log(i);
}

console.log("Kraj drugog zadatka");


// 3. Zadatak - Ispisati parne brojeve od 1 do 20

// I nacin
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// II nacin
for (i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("Kraj treceg zadatka");


// 4. Zadatak - Ispisati dvostruku vrednost brojeva od 5 do 15
let br1 = 5;
let br2 = 15;
let pr;
for (; br1 <= br2; br1++) {
    pr = br1 * 2;
    console.log(`Dvostuka vriejdnost je: ${pr}`);
}



// 5. Zadatak - Odrediti sumu brojeva od 1 do n
let n = 100;
let suma = 0;
for (i = 1; i <= n; i++) {
    suma = suma + i;  // ili suma += 1
}
console.log(`Suma brojeva od 1 do ${n} je jednaka: ${suma}`);


// 6. Zadatak - Odrediti sumu brojeva od n do m
n = 5;
let m = 6;
suma = 0;
for (; n <= m; n++) {
    suma += n;
}
console.log(suma)


// 7. Zadatak - Odrediti proizvod brojeva od n do m
n = 2;
m = 6;
let p = 1;
for (i = n; i <= m; i++) {
    p *= i;  // p = p * i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je jednak: ${p}`);


// 8. Zadatak - Odrediti sumu kvadrata brojeva od n do m
n = 3;
m = 5;
suma = 0;
for (; n <= m; n++) {
    suma = suma + n * n;
}
console.log(suma);


// 9. Zadatak - Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
// <img src="slike/1.jpg">
// <img src="slike/2.jpg">
// <img src="slike/3.jpg">
for (i = 1; i <= 3; i++) {
    document.body.innerHTML += `<img src="slike/${i}.jpg">`;
}


// 10. Zadatak - Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
n = 20;
m = 100;
p = 1;
for (; n <= m; n++) {
    if (n % 11 == 0) {
        p *= n;
    }
}
console.log(p);


// 11. Zadatak - Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let br = 0;
for (i = 5; i <= 150; i++) {
    if (i % 13 == 0) {
        br++;
    }
}
console.log(`U intervalu od 5 do 150 ima ${br} brojeva djejivih sa 13 `);


// 12. Zadatak - Ispisati aritmetičku sredinu brojeva od n do m.
n = 5;
m = 10;
suma = 0;
br = 0;
for (n; n <= m; n++) {
    suma += n;
    br++;
}
let as = suma / br;
console.log(as);


// 13. Zadatak - Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
n = -10;
m = 10;
let nbr = 0;
let pbr = 0;
for (; n <= m; n++) {
    if (n < 0) {
        nbr++;
    }
    else {
        pbr++;
    }
}
console.log(`Pozitivno je ${pbr} brojeva, a negativno ${nbr}`);


// 15. Zadatak - Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
n = 3;
m = 49;
br = 0;
suma = 0;
for (; n <= m; n++) {
    if (n % 10 == 4) {
        br++;
        suma += n;
    }
}
console.log(`Broj brojeva izmedju n i m kojima je posljednja cifra 4 je ${br}`);
console.log(`Suma brojeva izmedju n i m kojima je posljednja cifra 4 je ${suma}`);


// 16. Zadatak - Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 5;
m = 10;
suma = 0;
a = 3;
for (; n <= m; n++) {
    if (n % a != 0) {
        suma += n;
    }
}
console.log(suma);


// 20. Zadatak
// <tr><td>Tekst</td><td>Tekst</td></tr>
// let tr = 6;
// for (i = 1; i <= tr; i++) {
//     if (i == 1) {
//         document.body.innerHTML += `<table><tr><td>Tekst</td><td>Tekst</td></tr>`
//     }
//     if (i % 2 == 0) {
//         document.body.innerHTML += `<tr class="obojen" style="background-color:purple"><td>Tekst</td><td>Tekst</td></tr>`
//     }
//     else {
//         document.body.innerHTML += `<tr><td>Tekst</td><td>Tekst</td></tr>`
//     }
//     if (i == tr) {
//         document.body.innerHTML += `<tr><td>Tekst</td><td>Tekst</td></tr></table>`
//     }
// }
let tabela = `<table border="1">`;
for (let red = 1; red <= 6; red++) {
    if (red % 2 == 0) {
        tabela +=
            `
        <tr class="roze">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `;
    }
    else {
        tabela +=
            `
        <tr>
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `;
    }
}

tabela += `</table>`;
document.body.innerHTML += tabela;