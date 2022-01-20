// BEZ PONAVLJANJA KODA - POMOCU CALLBACK FUNKCIJA - NAJISPRAVNIJI NACIN

let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            // Radi nesto kada je sve u redu
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            // Radi nesto kada je doslo do greske
            reject("Doslo je do greske!");
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
};


// 2. ZADATAK
let zadatak2 = (arr) => {
    arr.forEach(u => {
        if (u.website.includes(".com")) {
            console.log(u.name);
        }
    });
};

// 3. ZADATAK
let zadatak3 = (arr) => {
    arr.forEach(u => {
        if (u.name.includes("Clementin")) {
            console.log(u.name);
        }
    });
};

// 4. ZADATAK
let zadatak4 = (arr) => {
    arr.forEach(u => {
        if (u.company.name.includes("Group") || u.company.name.includes("LLC")) {
            console.log(u.name);
        }
    });
};

// 5. ZADATAK
let zadatak5 = (arr) => {
    let gradovi = [];
    arr.forEach(u => {
        if (gradovi.includes(u.address.city) == false) {
            gradovi.push(u.address.city);
        }
    });
    console.log(gradovi);
};

// 6. ZADATAK
let zadatak6 = (arr) => {
    let broj = 0;
    arr.forEach(u => {
        if (parseFloat(u.address.geo.lat) < 0 && parseFloat(u.address.geo.lng) < 0) {
            broj++;
        }
    });
    console.log(broj);
};

// FUNKCIJA KOJA SE POZIVA KADA IMAMO GRESKU
let ispisPorukeStranica = (poruka) => {
    document.body.innerHTML += `<p class="error">${poruka}</p>`;
};

let ispisPorukeKonzola = (poruka) => {
    console.log(poruka);
};

// POZIV FUNKCIJA
// OVO SU ASINHRONI POZIVI - rezultat iz 130 linije moze da stigne prije rezultata iz 127 linije
getUsers(zadatak2, ispisPorukeStranica);
getUsers(zadatak3, ispisPorukeStranica);
getUsers(zadatak4, ispisPorukeKonzola);
getUsers(zadatak5, ispisPorukeKonzola);
getUsers(
    // RESOLVE FUNKCIJA
    (arr) => {
        let broj = 0;
        arr.forEach(u => {
            if (parseFloat(u.address.geo.lat) < 0 && parseFloat(u.address.geo.lng) < 0) {
                broj++;
            }
        });
        console.log(broj);
    },
    // REJECT FUNKCIJA
    (poruka) => {
        document.body.innerHTML += `<p class="error">${poruka}</p>`;
    }
);



// NAPISI SVE ODVOJENO ZADATKE




// MOJ NACIN - NIJE BAS NAJSJAJNIJI, ALI BRAVO, DOBRO SI URADILA ZADATKE
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        // 2. ZADATAK
        data.forEach(u => {
            if (u.website.includes(".com")) {
                console.log(u.name);
            }
        });

        // 3. ZADATAK
        data.forEach(u => {
            if (u.name.includes("Clementin")) {
                console.log(u.name);
            }
        });

        // 4. ZADATAK
        data.forEach(u => {
            if (u.company.name.includes("Group") || u.company.name.includes("LLC")) {
                console.log(u.name);
            }
        });

        let niz = [];
        // 5. ZADATAK
        data.forEach(u => {
            if (niz.includes(u.address.city) == false) {
                niz.push(u.address.city);
            }
        });
        console.log(niz);

        let broj = 0;
        // 6. ZADATAK
        data.forEach(u => {
            if (parseFloat(u.address.geo.lat) < 0 && parseFloat(u.address.geo.lng) < 0) {
                broj++;
            }
        });
        console.log(broj);
    }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();