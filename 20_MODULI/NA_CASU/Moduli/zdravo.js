function ispis(poruka) {
    console.log(poruka);
}

function zdravo(ime) {
    console.log(`Zdravo ${ime}!`);
}

let ime = "Kristina";

// I svojstvo - ucaurivanje
export { zdravo, ime }; // u viticastim zagradama se stavlja sve sto zelimo da exportujemo, u ovom slucau funkcija "zdravo" i promjenljiva "ime" - moze da sadrzi proizvoljno funkcija, promjenljivih i klasa - u modulu mozemo da imamo proizvoljno svega a opet exportujemo proizvoljno svega
// Moramo imati modul koji eksportuje kao sto je ovaj, i modul koji ce da importuje

// Ne mora da se pise dolje exporet sve, nego moze i direktno prije promjenljive da se napise export:
// export let ime = "Kristina";

// U modulu ne mozemo da koristimo nedeklarisane promjenljive - odn. uvijek postoji "use strict" direktiva