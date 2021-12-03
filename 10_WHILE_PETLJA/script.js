console.log("While Petlja");
/*
let i = 1;
console.log(i); //1
i++;
console.log(i); //2
i++;
console.log(i); //3
i++;
console.log(i); //4
i++;
console.log(i); //5
i++;
*/

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrijednost promjenljive i je: ${i}`); //6


// 1. Zadatak
// a) Svaki broj u novom redu
i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}
// i = 21

// b) Svaki broj u istom redu
let rez = "";
i = 1;
while (i <= 20) {
    rez = rez + i + " "; // ili rez += i + " ";
    i++;
}
console.log(rez);

console.log("Kraj prvog zadatka");


// 2. Zadatak (ispisati brojeve od 20 do 1)
let c = 20;
while (c >= 1) {
    console.log(c);
    c--;
}

console.log("Kraj drugog zadatka");


// 3. Zadatak (ispisati parne brojeve od 1 do 20)
// Prvi nacin
let a = 1;
while (a <= 20) {
    if (a % 2 == 0) {
        console.log(a);
    }
    a++;
}

// Drugi nacin
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;  // i = i + 2. NE MOZE: i + 2;
}

console.log("Kraj treceg zadatka");


// 4. Zadatak
/*
document.body.innerHTML += '<p style="color:red;">1. paragraf</p>'
document.body.innerHTML += '<p style="color:purple;">2. paragraf</p>'
document.body.innerHTML += '<p style="color:green;">3. paragraf</p>'
document.body.innerHTML += '<p style="color:red;">4. paragraf</p>'
document.body.innerHTML += '<p style="color:purple;">5. paragraf</p>'
document.body.innerHTML += '<p style="color:green;">6. paragraf</p>'
*/

let n = 16;
i = 1;
while (i <= n) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color:red;">${i}. paragraf</p>`
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color:purple;">${i}. paragraf</p>`
    }
    else {
        document.body.innerHTML += `<p style="color:green;">${i}. paragraf</p>`
    }
    i++;
}

// 6. Zadatak (odrediti sumu brojeva od 1 do 100)
i = 1;
let suma = 0;
while (i <= 100) {
    // Iskoristi i tako da se odredi suma
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);

/*

--------------------
#Iteracija |  i  | suma
--------------------
    | 0    |  1  |  0
    | 1    |  2  |  1
    | 2    |  3  |  3
    | 3    |  4  |  6
    | 4    |  5  |  10
    | 5    |  6  |  16
    | 100  | 101 |  5050

*/


// 7. Zadatak - Odrediti sumu brojeva od 1 do n
i = 1;
n = 18;
suma = 0;
while (i <= n) {
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do n jednaka je ${suma}`);


// 9. Zadatak - Odrediti proizvod brojeva od n do m
n = 3;
i = n;  // Koristi se da se promjenljiva n ne bi mjenjala u ispisu
let m = 6;
let proizvod = 1;
while (i <= m) {
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je ${proizvod}`);


// 10. Zadatak - Odrediti sumu kvadrata parnih i sumu kubova neparnih od n do m
n = 1;
m = 3;
let rez1 = 0;
let rez2 = 0;
while (n <= m) {
    if (n % 2 == 0) {
        rez1 = rez1 + (n * n);
    }
    else {
        rez2 = rez2 + (n * n * n);
    }
    n++;
}
console.log(`Suma kvadrata parnih brojeva je ${rez1}`);
console.log(`Suma kubova neparnih brojeva je ${rez2}`);


// 11. Zadatak - Odrediti sa koliko brojeva je djeljiv broj k
let k = 6;
i = 1;
p = "";
while (i <= k) {
    if (k % i == 0) {
        p = p + i + " ";
    }
    i++;
}
console.log(`Broj ${k} je djeljiv sa brojevima:${p}`);

// Preko for petlje:
k = 53;
br = 0;
for (i = 1; i <= k; i++) {
    if (k % i == 0) {
        br++;
    }
}
console.log(`Broj ${k} je djeljiv sam ${br} brojeva`);


// 12. Zadatak - Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// Nadovezujemo se na prethodni zadatak
if (br == 1) {
    console.log("Broj nije ni prost ni slozen");
}
else if (br == 2) {
    console.log(`Broj je prost`);
}
else {
    console.log("Broj je slozen");
}