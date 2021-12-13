// 9. Zadatak - Ispisati dvostruku vrednost brojeva od 5 do 15.
let i = 5;
let rez = "";
while (i <= 15) {
    rez = rez + i * 2 + " ";
    i++;
}
console.log(rez);

// 10. Zadatak - Odrediti sumu brojeva od n do m .
let n = 2;
let m = 10;
let suma = 0;
for (i = n; i <= m; i++) {
    suma += i;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);


// 11. Zadatak - Odrediti sumu kvadrata brojeva od n do m.
n = 1;
m = 5;
suma = 0;
for (i = n; i <= m; i++) {
    suma = suma + i * i;
}
console.log(suma);


// 12. Zadatak - Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
let proizvod = 1;
for (i = 20; i <= 100; i++) {
    if (i % 11 == 0) {
        proizvod *= i;
    }
}
console.log(proizvod);


// 13. Zadatak - Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
n = -2,
    m = 10;
let pBr = 0;  // pozitivni brojevi
let nBr = 0;  // negativni brojevi
for (i = n; i <= m; i++) {
    if (i < 0) {
        nBr++;
    }
    else {
        pBr++;
    }
}
console.log(`Izmedju brojeva ${n} i ${m} ima ${pBr} pozitivnih i ${nBr} negativnih brojeva`);


// 14. Zadatak - Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
n = 5;
m = 50;
let d = 0;
while (n <= m) {
    if (n % 3 == 0 || n % 5 == 0) {
        d++;
    }
    n++;
}
console.log(`Ima ${d} broja koja su djeljiva sa 3 ili sa 5`);


// 15. Zadatak - Odrediti proizvod brojeva od n do m koji su deljivi brojem a.
n = 10;
m = 25;
let a = 5;
proizvod = 1;

for (i = n; i <= m; i++) {
    if (i % a == 0) {
        proizvod *= i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji du djeljivi brojem ${a} je ${proizvod}`);


// 16. Zadatak - Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
n = 345;
let br = 0;
for (i = 1; i <= n; i++) {
    if (n % i == 0 && i % 3 == 0 && i % 2 != 0) {
        br++
    }
}
console.log(`Broj ${n} ima ${br} djelioca koji su djeljivi brojem 3 i neparni su`);


// 17. Zadatak - Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
n = 143;
rez = 0;
while (n) {
    rez += n % 10;
    n = Math.floor(n / 10);
}
console.log(rez);


// 18. Zadatak - Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima
n = 10;
for (i = 1; i <= n; i++) {
    if (i % 3 == 0) {
        document.body.innerHTML += `<li class="ljubicasti">Element ${i}</li>`
    }
    else {
        document.body.innerHTML += `<li>Element ${i}</li>`
    }
}


// 19. Zadatak 
// n = 64;
// for (i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         document.body.innerHTML += `<span style="color:white;background-color:black;">${i}</span>`
//     }
//     else {
//         document.body.innerHTML += `<span>${i}</span>`
//     }
//     if (i % 8 == 0) {
//         document.body.innerHTML += `<br>`
//     }
// }

// Popravka 19. Zadatka
n = 64;
for (i = 1; i <= n; i++) {
    document.body.innerHTML += `<span>${i}</span>`
    if (i % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}