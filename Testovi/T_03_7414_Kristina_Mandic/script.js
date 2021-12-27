// Napraviti objekat sportista koji od polja ima:
// ○ imePrezime (string - ime i prezime sportiste)
// ○ visina (decimalni broj koji predstavlja visinu sportiste u metrima)
// ○ timovi (niz stringova - različiti timovi u kojima je sve ovaj sportista igrao)
// ➢ Napraviti niz od najmanje tri objekta (najmanje tri sportiste)

let sportista1 = {
    imePrezime: "Pera Peric",
    visina: 1.91,
    timovi: ["Crvena Zvezda", "Partizan", "Ajaks"]
};

let sportista2 = {
    imePrezime: "Zika Zikic",
    visina: 1.99,
    timovi: ["Crvena Zvezda", "Vozdovac", "Adaks"]
};

let sportista3 = {
    imePrezime: "Milan Milanovic",
    visina: 2.01,
    timovi: ["Barselona", "Partizan"]
};

let sportista4 = {
    imePrezime: "Nebojsa Nebojsic",
    visina: 1.92,
    timovi: ["Real Madrid", "Partizan", "Vozdovac"]
};

let sportisti = [sportista1, sportista2, sportista3, sportista4];

/////////////////////////

// 1. Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.

let prosečnaVisina = arr => {
    let suma = 0;
    arr.forEach(s => {
        suma += s.visina;
    });
    return suma / arr.length;
};

console.log("1. Zadatak :");
console.log(prosečnaVisina(sportisti));


// 2. Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su sportisti igrali i vraća taj broj. Pozvati funkciju i rezultat ispisati u konzoli.

let igraliZaTim = (arr, x) => {
    let broj = 0;
    arr.forEach(s => {
        s.timovi.forEach(t => {
            if (t == x) {
                broj++;
            }
        });
    });
    return broj;
};

console.log("2. Zadatak :");
console.log(igraliZaTim(sportisti, "Crvena Zvezda"));


// 3. Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.

let najmanjeTransfera = arr => {
    let min = arr[0].timovi.length;
    let sportista = arr[0];
    arr.forEach(s => {
        if (s.timovi.length < min) {
            min = s.timovi.length;
            sportista = s;
        }
    });
    return sportista.imePrezime;
};

console.log("3. Zadatak :");
console.log(najmanjeTransfera(sportisti));


// 4. Trener igrače na treningu deli u dva tima kako bi se što bolje pripremili za utakmicu.
// Kada trener dobije spisak sportista (niz sportista) on ih deli na sledeći način:
// ○ Ukoliko je na spisku paran broj igrača, trener u prvi tim stavlja prvu polovinu
// igrača sa spiska, dok drugi tim čine igrači sa druge polovine liste
// ○ Ukoliko je na spisku neparan broj igrača, trener u prvi tim stavlja jednog
// igrača više nego u drugi tim.
// Napisati funkciju višiTimPodela, kojoj se prosleđuje niz sportista a funkcija ispisuje
// na ekranu tekst “Viši je prvi tim” ukoliko je prosečna visina igrača u prvom timu veća
// od prosečne visine igrača u drugom timu. U suprotnom funkcija na ekranu ispisuje
// “Viši je drugi tim”. Ako su te dve prosečne visine iste, funkcija ispisuje tekst “Oba
// tima su u proseku iste visine”. Pozvati funkciju.

let višiTimPodela = arr => {
    let t1 = [];
    let t2 = [];
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length / 2) {
                t1.push(arr[i]);
            }

            else {
                t2.push(arr[i]);
            }
        }
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (i < (arr.length + 1) / 2) {
                t1.push(arr[i]);
            }

            else {
                t2.push(arr[i]);
            }
        }
    }
    let visinaT1 = 0;
    let visinaT2 = 0;
    t1.forEach(s => {
        visinaT1 += s.visina;
    });
    t2.forEach(s => {
        visinaT2 += s.visina;
    });
    if (visinaT1 / t1.length > visinaT2 / t2.length) {
        console.log("Visi je prvi tim");
    }
    else if (visinaT2 / t2.length > visinaT1 / t1.length) {
        console.log("Visi je drugi tim");
    }
    else {
        console.log("Oba tima su u proseku iste visine");
    }
};

console.log("4. Zadatak :");
višiTimPodela(sportisti);

// 5. Napisati funkciju trenerVidi kojoj se prosleđuje niz sportista a funkcija vraća
// vrednost (ceo broj) koliko sportista trener vidi.
// Pretpostavimo da sportisti stoje u vrsti, kao na sledećoj slici, a da trener stoji pre
// prvog sportiste u vrsti(pre nultog elementa u nizu).
// Vaš zadatak je da prebrojite koliko sportista trener može da vidi sa svoje pozicije.

let trenerVidi = arr => {
    let prvi = arr[0].visina;
    let vidi = 0;
    arr.forEach(s => {
        if (s.visina > prvi) {
            vidi++;
        }
    });
    return vidi;
};

console.log("5. Zadatak :");
console.log(trenerVidi(sportisti));