let pitanje1 = {
    pitanje: "Koji je najveci hotelski lanac na svijetu?",
    odgovori: ["InterContinental Hotels Group", "Marriott International", "Hyatt Hotels Corporation", "Jin Jiang"],
    tacno: 1
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
    pitanje: "Koliko soba ima najveci hotel na svijetu?",
    odgovori: [600, 650, 700, 750, 800],
    tacno: 3
};

let pitanje7 = {
    pitanje: "Koja evropska zemlja ima najvise hotela?",
    odgovori: ["Njemacka", "Italija", "Norveska", "Francuska"],
    tacno: 3
};

let pitanje8 = {
    pitanje: "Koja azijska zemlja ima najvise hotela?",
    odgovori: ["Indija", "Kina", "Singapur", "Japan"],
    tacno: 1
};

let pitanje9 = {
    pitanje: "Koliko kosta najskuplja hotelska soba na svijetu, u dolarima?",
    odgovori: ["80 000", "90 000", "100 000", "110 000", "120 000"],
    tacno: 2
};

let pitanje10 = {
    pitanje: "Koliko hotela ima u Srbiji?",
    odgovori: [500, 600, 700, 800, 900],
    tacno: 2
};


let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];


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
// Postavka pitanja
let prviDio = document.createElement("p");

let broj = 0; // broj koji sluzi za imenovanje odgovora
let ispisNaStranici = arr => {
    arr.forEach((p, i) => {
        broj++;
        let fieldset = document.createElement("fieldset");
        prviDio.appendChild(fieldset);
        let h4 = document.createElement("h4");
        h4.textContent = `${i + 1}. ${p.pitanje}`;
        fieldset.appendChild(h4);
        p.odgovori.forEach((o, i) => {
            let label = document.createElement("label");
            fieldset.appendChild(label);
            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", `${broj}`);
            radio.setAttribute("value", `${o}`);
            if (p.tacno == i) {
                radio.classList.add("tacno");
            }
            if (i == 0) {
                radio.classList.add("prviOdgovor");
            }
            label.appendChild(radio);
            label.innerHTML += `${o}`;
            let br = document.createElement("br");
            fieldset.appendChild(br);
        });
        // Checkirati prve odgovore
        let checked = document.getElementsByClassName("prviOdgovor");
        for (let i = 0; i < checked.length; i++) {
            checked[i].checked = true;
        }
    });
}
document.body.appendChild(prviDio);
ispisNaStranici(a);
// let prviKrug = ispisNaStranici(a);
// prviDio.innerHTML += `${prviKrug}`;

// Dugmici
let drugiDio = document.createElement("p");
let novaPitanja = document.createElement("input");
novaPitanja.setAttribute("type", "reset");
novaPitanja.setAttribute("value", "Nova pitanja");
drugiDio.appendChild(novaPitanja);

let posalji = document.createElement("input");
posalji.setAttribute("type", "submit");
posalji.setAttribute("value", "Posalji")
drugiDio.appendChild(posalji);

let ponoviTest = document.createElement("input");
ponoviTest.setAttribute("type", "reset");
ponoviTest.setAttribute("value", "Ponovi Test");
drugiDio.appendChild(ponoviTest);

document.body.appendChild(drugiDio);

// Kada kliknemo posalji
let treciDio = document.createElement("p");
document.body.appendChild(treciDio);
let tacniOdg = document.getElementsByClassName("tacno");

// Onesposobljavanje ponovnog odgovaranja
let zaustavi = () => {
    let inputPolja = document.querySelectorAll("label input");
    let inputPolja1 = Array.from(inputPolja);
    inputPolja1.forEach(i => {
        i.disabled = true;
    });
};

posalji.innerHTML = ``;
posalji.addEventListener("click", (e) => {
    e.preventDefault();
    zaustavi();
    posalji.disabled = true;
    for (let i = 0; i < tacniOdg.length; i++) {
        if (tacniOdg[i].checked == true) {
            treciDio.innerHTML += `<p style="color:green">Tacno ste odgovorili na ${i + 1}. pitanje`;
        }
        else {
            treciDio.innerHTML += `<p style="color:red">Niste tacno odgovorili na ${i + 1}. pitanje`;
        }
    }
});

// Dugme Nova pitanja
novaPitanja.addEventListener("click", (e) => {
    posalji.disabled = false;
    treciDio.innerHTML = ``;
    e.preventDefault();
    novaPitanja.disabled = true;
    prviDio.innerHTML = ``; // ciscenje stranice, odn. otklanjanje prvih 5 pitanja, kako bih u sljedecoj liniji stavila drugih 5
    ispisNaStranici(b);
    // Nakon klika na ovo dugme, kada se ponovo klikne nista se nece desiti jer je izlistao pitanja do kraja
});

// Ponovi test, odn. restartuj stranicu - ponovna randomizacija pitanja
ponoviTest.addEventListener("click", (e) => {
    e.preventDefault;
    location.reload();
});