let getSportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if (request.readyState === 4) {
            reject("Doslo je do greske!")
        }
    });

    request.open("GET", "sportisti.json");
    request.send();
};

// REJECT FUNKCIJA
let ispisKonzola = poruka => {
    console.log(poruka);
};

// 3. ZADATAK
let prosjecnaVisina = arr => {
    let zbir = 0;
    arr.forEach(s => {
        zbir += s.visina;
    });
    let prosjecnaV = zbir / arr.length;
    console.log(prosjecnaV);
};

// 4. ZADATAK
let najmanjeTransfera = arr => {
    let min = arr[0].timovi.length;
    let sportista = arr[0];
    arr.forEach(s => {
        if (s.timovi.length < min) {
            min = s.timovi.length;
            sportista = s;
        }
    });
    console.log(sportista.imePrezime);
};

// 5. ZADATAK 
let lakers = arr => {
    arr.forEach(s => {
        if (s.timovi.includes("Lakers")) {
            console.log(s.imePrezime);
        }
    });
};

getSportisti(prosjecnaVisina, ispisKonzola);
getSportisti(najmanjeTransfera, ispisKonzola);
getSportisti(lakers, ispisKonzola);