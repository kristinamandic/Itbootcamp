// PRIMJERI CALLBACK FUNKCIJA
// CALLBACK - kada funkcija prima drugu funkciju

let myFunction = callback => {
    callback();
};

// Realizacija callback funkcije, vrsi se prilikom poziva roditeljske funkcije
// Pozivanje myFunction funkcije
myFunction(() => {
    console.log("Callback okinuta");
});


/////////////////////////////////////////////////
let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
};

// 1. primjer - realnizacija funkcije se prosljedjuje kao parametar
sum((x, y) => {
    console.log(x + y);
});

// 2. primjer - kreiramo posebnu funkciju za realizaciju i onda je prosljedimo kao parametar
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum);  // poziv funkcije koja realizuje ide bez zagrada


/////////////////////////////////////////////////
let my = f => {
    f("Kristina");
};

my(x => {
    console.log(`Hello ${x}`);
});


/////////////////////////////////////////////////
let racunaj = (string, callback) => {
    console.log(string);
    callback(7, 3);
};

racunaj("Oduzimanje", (x, y) => {
    console.log(x - y);
});

racunaj("Mnozenje", (x, y) => {
    console.log(x * y);
});


/////////////////////////////////////////////////
let racunaj2 = (str, cb) => {
    let a = 15;
    let b = 3;
    console.log(str, cb(a, b));
};

racunaj2("Djeljenje:", (x, y) => {
    return x / y;
});


/////////////////////////////////////////////////
let racunaj3 = (str, a, b, cb) => {
    console.log(str, cb(a, b));
};

racunaj3("Djeljenje:", 15, 17, (a, b) => {
    let res = a / b;
    return res;
});