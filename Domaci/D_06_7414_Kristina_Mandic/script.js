// 1. Zadatak
let n = 21;
let m = 49;
let rez = 1;
while (n <= m) {
    if (n % 7 == 0 && n % 3 != 0) {
        rez = rez * n;
    }
    n++;
}
if (rez > 7) {
    console.log(rez);
}
else {
    console.log("Pogresan unos");
}


// 2. Zadatak
n = 1;
m = 2;
rez = 0;
while (n <= m) {
    if (n % 3 == 0 && n % 7 != 0) {
        rez = rez + n;
    }
    n++;
}
if (rez > 3) {
    console.log(rez);
}
else {
    console.log("Pogresan unos");
}