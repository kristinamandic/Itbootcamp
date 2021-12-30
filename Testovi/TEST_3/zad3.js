// 3. Izmeniti objekte u prethodnom zadatku tako da svaki objekat sadrži i polje plate koje je niz neto plata koje je svaka osoba zaradila u poslednjih 5 godina. zNapisati funkciju koja ispisuje podatke o osobi koja ima najveću razliku između svoje minimalne i maksimalne plate.

let visine = [
    { ime: "Pera", visina: 189, pol: "M", plate: [100, 600, 7000, 500, 300] },
    { ime: "Laza", visina: 192, pol: "M", plate: [600, 800, 2000, 300, 540] },
    { ime: "Milka", visina: 164, pol: "Z", plate: [800, 55, 700, 900, 600,] },
    { ime: "Mika", visina: 176, pol: "M", plate: [345, 645, 4564, 234, 234] },
    { ime: "Sonja", visina: 178, pol: "Z", plate: [1223, 234, 4334, 344, 234] },
    { ime: "Milica", visina: 166, pol: "Z", plate: [1867, 866, 6767, 675, 4332] }
];


let razlika = arr => {
    let razlika = Number.MIN_VALUE;
    let osoba = arr[0];
    arr.forEach(o => {
        let min = o.plate[0];
        let max = o.plate[0];
        o.plate.forEach(p => {
            if (p < min) {
                min = p;
            }
            if (p > max) {
                max = p;
            }
        });
        if (max - min > razlika) {
            razlika = max - min;
            osoba = o;
        }
    });
    console.log(osoba);
};

razlika(visine)