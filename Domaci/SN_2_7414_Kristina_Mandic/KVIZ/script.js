let pitanje1 = {
    pitanje: "Koji je najveci hotelski lanac na svijetu?",
    odgovori: ["InterContinental Hotels Group", "Marriott International", "Hyatt Hotels Corporation", "Jin Jiang"],
    tacno: 0
};

let pitanje2 = {
    pitanje: "Koliko hotela je u vlasnistvu najveceg svjetkog lanca hotela?",
    odgovori: [3000, 4000, 5000, 6000, 7000, 8000],
    tacno: 4
};

let pitanje3 = {
    pitanje: "Koliko soba ima najveci hotelski lanac na svijetu?",
    odgovori: ["2 500 000", "2 000 000", "1 500 000", "1 000 000", "500 000"],
    tacno: 2
};

let pitanje4 = {
    pitanje: "Koji je najveci hotel na svijetu?",
    odgovori: ["Mandalay Bay", "First World Hotel & Plaza", "Caesars Palace", "Izmailovo Hotel"],
    tacno: 1
};

let pitanje5 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanje6 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanje7 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanje8 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanje9 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanje10 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanje11 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanje12 = {
    pitanje: "Gdje se nalazi najveci hotel na svijetu?",
    odgovori: ["Malezija", "Sjedinjene Americke Drzave", "Rusija", "Makao"],
    tacno: 0
};

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12];


// Generisanje nasumicnih brojeva indeksa
let randomBrojevi = arr => {
    let max = arr.length;
    let random = [];
    for (let i = 0; i < max; i++) {
        let broj = Math.floor(Math.random() * max);
        if (random.indexOf(broj) == -1) {
            random.push(broj);
        }
        else {
            i--;
        }
    }
    return random
}
console.log(randomBrojevi(pitanja));


// Sortiranje pitanja pomoci nasumicnih brojeva indeksa
let randomPitanja = arr => {
    let brojevi = randomBrojevi(arr);
    let noviNiz = []
    for (let i = 0; i < arr.length; i++) {
        noviNiz.push(arr[brojevi[i]]);
    }
    return noviNiz;
}

pitanja = randomPitanja(pitanja);


// Podjela niza na nizove od po 5 objekata
let a = [];
let b = [];
let c = [];
for (let i = 0; i < pitanja.length; i++) {
    if (i < 5) {
        a.push(pitanja[i]);
    }
    else if (i < 10) {
        b.push(pitanja[i]);
    }
    else {
        c.push(pitanja[i]);
    }
}

/////////////////////////////////
let h2;
let fieldset;
let radio;

pitanja.forEach((p, i) => {
    i++;
    fieldset = document.createElement("fieldset");
    document.body.appendChild(fieldset);
    h2 = document.createElement("h4");
    h2.innerHTML = `${i}. ${p.pitanje}`;
    fieldset.appendChild(h2)
    p.odgovori.forEach(o => {
        radio = document.createElement("input");
        radio.innerHTML = `${o}`;
        fieldset.appendChild(radio)
    });
});
let pitanja = [pitanje1, pitanje2, pitanje3, pitanje5, pitanje5];

// let random = 0;
// let randomNiz = [];
// let broj = 0;
// for (let i = 1; i <= 10; i++) {
//     random = Math.floor(Math.random() * 10) + 1;
//     randomNiz.push(random);
// }

pitanja.forEach(p => {

});
