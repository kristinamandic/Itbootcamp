import { Knjiga, ukupnaCijena, prosjecnaCijena, prosjecnaStranica } from "./knjiga.js";


let knjiga1 = new Knjiga("Hari Poter i Vatreni Pehar", "Dz. K. Rouling", 2000, 650, 1700);
let knjiga2 = new Knjiga("Gospodar Prstenova i duzina prstena", "Dzon Ronald Ruel Tolkin", 1954, 480, 1500,)
let knjiga3 = new Knjiga("Saga o Vjescu", "Andzej Spakovski", 2012, 320, 8000);

console.log(knjiga1);
knjiga1.stampaj();