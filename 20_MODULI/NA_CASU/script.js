import { zdravo, ime } from "./Moduli/zdravo.js";

// ime = "Zdravko";  - nije moguce mjenjati vrijednosti promjenljivih iz modula
// let ime = "Glisa";  - nije moguce ni redeklarisanje promjenljive - odn. nije moguce imati "lokalnu" promjenljivu sa istim imenom
zdravo("Pera");
console.log(ime);