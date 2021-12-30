let visine = [
    { ime: "Pera", visina: 189, pol: "M" },
    { ime: "Laza", visina: 192, pol: "M" },
    { ime: "Milka", visina: 164, pol: "Z" },
    { ime: "Mika", visina: 176, pol: "M" },
    { ime: "Sonja", visina: 178, pol: "Z" },
    { ime: "Milica", visina: 166, pol: "Z" }
];

//	Napisati funkciju koja ispituje da li je prosečna visina mušakaraca veća od prosečne visine žena
let prosVisine = arr => {
    let visMus = 0;
    let brojMus = 0;
    let visZen = 0;
    let brojZen = 0;
    arr.forEach(osoba => {
        if (osoba.pol == "M" || osoba.pol == "m") {
            brojMus++;
            visMus += osoba.visina;
        }
        else if (osoba.pol == "Z" || osoba.pol == "z" || osoba.pol == "ž" || osoba.pol == "Ž") {
            brojZen++;
            visZen += osoba.visina;
        }
    });
    if (visMus / brojMus > visZen / brojZen) {
        return true;
    }
    else {
        return false;
    }
};

console.log(prosVisine(visine));
