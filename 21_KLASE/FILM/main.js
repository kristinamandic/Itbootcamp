import Film from "./film.js";

// 1. FILM
console.log("..................................FILM..................................");

let film1 = new Film("The Silence of the Lambs", "Johnathan Demme", 1991);
let film2 = new Film("Hannibal", "Ridley Scott", 2001);
let film3 = new Film("Red Dragon", "Brett Ratner", 2004);
console.log(film1);
console.log(film2.reziser);
film3.godinaIzdanja = 2002;
console.log(film3);

film2.stampaj();


//////////////////////////////////////////////////
// 2. PACIJENT
console.log("..................................PACIJENT..................................");