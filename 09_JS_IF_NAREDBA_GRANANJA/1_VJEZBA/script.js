// 1. Zadatak
let a = 6;
let b = 7;
if(a >= b){
    console.log(`Broj ${a} je veci, dok je broj ${b} manji`);
}
else{
    console.log(`Broj ${b} je veci ili jednak, dok je broj ${a} manji ili jednak`);
}

//2. Zadatak
let temp = -10;
if(temp >= 0){
    document.body.innerHTML = `<p style="color: red;">Temperatura od ${temp} je u plusu</p>`;
}
else{
    document.body.innerHTML = `<p style="color: blue;">Temperatura od ${temp} je u minusu</p>`;}

// 4. Zadatak
let datum = new Date();
let vrijeme = datum.getHours();
if(vrijeme >= 12){
    console.log("Trenutno je popodne");
}
else{
    console.log("Trenutno je jutro"); 
}

// 5. Zadatak
let godinaSada = datum.getFullYear();
let godinaRodjenja = 2013;
if(godinaSada - godinaRodjenja >= 18){
    console.log("Osoba je punoljetna");
}
else{
    console.log("Osoba je maloljetna");
}

// 6. Zadatak
let x = 17;
let y = 13;
let z = 10;

console.log("Broj koji se dva puta nalazi na prvom mjestu je najveci broj:")
if(x > y){
    console.log("x je veci od y");
}
else{
    console.log("y je veci od z");
}

if(x > z){
    console.log("x je veci od z");
}
else{
    console.log("z je veci od x");
}

if(y > z){
    console.log("y je veci od z");
}
else{
    console.log("z je veci od y");
}

