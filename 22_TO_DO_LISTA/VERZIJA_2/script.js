// let btnDodaj = document.getElementById("dodaj");
let inputUnesi = document.getElementById("unesi");
let ul = document.querySelector("ul");

// Ranije je ovo bilo za Dugme dodaj - odnosno btnDodaj
inputUnesi.addEventListener("keyup", (e) => {
    // keyup - kada pritisnemo dugme na tastaturi i pustimo ga - aktiviramo ga cim prestanemo da drzimo dugme
    // keydown - kada pritisnemo dugme na tastaturi i ne pustimo
    e.preventDefault();
    // console.log(e.key, e.keyCode); - keyCode vraca kodove za razlicita dugmad na tastaturi 
    // Kljuc za Enter je 13
    if (e.keyCode == 13) {
        let inputUnesiValue = inputUnesi.value;
        inputUnesiValue = inputUnesiValue.trim();
        // Moj nacin
        // if (inputUnesiValue.trim().length == 0) {
        //     alert("Morate unjeti tekst!");
        // }
        if (inputUnesiValue == "" || inputUnesiValue == null) {
            alert("Morate unjeti tekst!");
        }
        else {
            let noviLi = document.createElement("li");
            noviLi.innerText = inputUnesiValue;
            let radio = document.querySelector('input[name="radio"]:checked');
            // console.log(radio.id, radio.value); - znaci mozemo da izvucemo i po id-ju
            let radioValue = radio.value;
            if (radioValue == "p") { // Dodavanje na pocetak
                ul.prepend(noviLi); // Dodajemo <li> cvor na pocetak <ul>
            }
            else if (radioValue == "k") { // Dodavanje na kraj
                ul.appendChild(noviLi); // Dodajemo <li> cvor na kraj <ul>
            }
            inputUnesi.value = ""; // Isprazni input polje nakon dodavanja elementa u <ul>
        }
    }
});

// EVENT BUBBLING - na roditelja se vezuje event listener

ul.addEventListener("click", e => {
    // console.log("Kliknuto na ul");
    // console.log(e.target); - vraca cijeli tag i njegovu djecu
    // console.log(e.target.tagName); - vraca samo ime taga na koji je kliknuto
    if (e.target.tagName == "LI") {
        // console.log("Kliknuto na li");
        e.target.remove(); // uklanjamo <li> tagove kada kliknemo na njih
    }
});


// TRIM
let tekst = "          Neki     tekst    ";
console.log(tekst); console.log(tekst.trim()); // .trim() funkcija sklanja praznine sa pocetka i kraja stringa, ali ne sklanja razmake unutar samog stringa, odn. nije makao razmake izmedju rijeci "Neki" i rijeci "tekst"

tekst = "           ";
console.log(tekst);
console.log(tekst.trim());