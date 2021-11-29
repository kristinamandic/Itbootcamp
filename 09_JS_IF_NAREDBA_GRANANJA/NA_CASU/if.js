console.log("IF - Naredba grananja");

if(true){
    console.log("Uslov je ispunjen");
}

console.log("Neki kod...");

// Operatori poredjenja: ==, !=, <, >, <=, >=
let a = 7;
let b = 7;
if( a == b){
    console.log("a i b su jednake vrijednosti");
}

a = 10;
b = 14;
if(a != b){
    console.log("a i b nisu jednake vrijednosti");
}

a = 4;
b = 4;
if(a < b){
    console.log("a je strogo manje od b");
}

if(a <= b){
    console.log("a je manje ili jednako b");
}

/////////////////////////////

// == promjerava samo jednakost po vrijednosti (nije bitan tip)
a = 5;
b = "5";
if(a == b){
    console.log("a i b su jednake vrijednosti");
}

// === provjerava jednakost i po tipu i po vrijednosti (bitan je tip) - najstroza provjera
a = 5;
b = 5;
if(a === b){
    console.log("a i b su jednaki po vrijednosti i po tipu");
}

// !== da li su dvije promjenljive razlicite bilo po tipu bilo po vrijednosti - najstroza promjena
a = 7;
b ="7";
if(a !== b){
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrijednosti");
}

// != da li su razlicite samo po vrijednosti
a = 8;
b = "8";
if (a != b){
    console.log("a i b su razliciti po vrijednosti")
}

/////////////////////////////

let x = 3;
let y = 2;
let z = 5;
if(x + y == z){
    console.log("x + y je jednako sa z")
}
