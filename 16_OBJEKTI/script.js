console.log("Objekti");

// Ovo je jedan objekat
let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena"
};

console.log(blog1);
console.log(typeof blog1);

// Ispis propertija na dva nacina
console.log(blog1.title);
console.log(blog1['title']);

// Izmjena propertija na dva nacina, a tako moze i da se doda novi properti
blog1.title = "Osnove HTML-a";
console.log(blog1);
blog1['author'] = "Jelena Matejic";
console.log(blog1);

////////////////////////////

let user = {
    username: "JM",
    age: 27,
    blogs: ["IF naredba grananja", "WHILE petlja", "FOR petlja"],
    login: function () {     // dodavanje funkcionalnosti
        console.log("Ulogovani ste");
    },  // kada je funkcija u objektu - metod se to zove
    logout: function () {
        console.log("Izlogovali ste se");
    },
    logBlogs: function () {
        console.log((this));
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user);
console.log(user.blogs);

let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
}

for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h5>${nasloviBlogova[i]}</h5>`;
}

// Poziv metoda
user.login();
user.login();
user.logout();

// Poziv metoda koji u sebi sadrzi poziv nekog propertija
// this
user.logBlogs();
console.log(this);


/* 1. Zadatak - Formirati objekat dan koji sadrži:
a) Datum (string u formatu YYYY/MM/DD),
b) Kiša (true/false),
c) Sunce (true/false),
d) Oblačno (true/false),
e) Vrednosti temperature (Niz temperatura tog dana).

Napisati metode koje:
1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

*/

let vrijeme = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    vrijednostiTemp: [-1, -1, 0, -1, 2, -2, -2],
    prosjecnaTemp: function () {
        let suma = 0;
        let broj = 0;
        this.vrijednostiTemp.forEach(temp => {
            suma += temp;
            broj++;
        });
        return suma / broj;
    },
    natprosjecnaTemp: function () {
        let pt = this.prosjecnaTemp();
        let broj = 0;
        this.vrijednostiTemp.forEach(temp => {
            if (temp > pt) {
                broj++;
            }
        });
        return broj;
    },
    maxTemp: function () {
        let max = this.vrijednostiTemp[0];
        let broj = 0;
        this.vrijednostiTemp.forEach(temp => {
            if (temp > max) {
                max = temp;
            }
        });
        this.vrijednostiTemp.forEach(temp => {
            if (temp == max) {
                broj++;
            }
        });
        return broj;
    },
    odDo: function (n, m) {
        for (let i = n++; i < m; i++) {
            this.vrijednostiTemp.forEach(temp => {
                if (temp == i) {
                    console.log(temp);
                }
            });
        }
    },
    iznadProsjeka: function () {
        let pt = this.prosjecnaTemp();
        let broj = 0;
        let broj1 = 0;
        this.vrijednostiTemp.forEach(temp => {
            broj++;
            if (temp > pt) {
                broj1++;
            }
        });
        if (broj1 > broj / 2) {
            return true;
        }
        else {
            return false;
        }
    },
    //6.
    leden: function () {
        /*this.vrijednostiTemp.forEach(temp => {
            if (temp > 0) {
                return false;
            }
        }); NE MOZE U FOR EACH PETLJI, SAMO U FOR */

        for (let i = 0; i < this.vrijednostiTemp.length; i++) {
            if (this.vrijednostiTemp[i] > 0) {
                return false;
            }
        }
        return true;
    }
};

console.log(vrijeme.prosjecnaTemp());
console.log(vrijeme.natprosjecnaTemp());
console.log(vrijeme.maxTemp());
vrijeme.odDo(0, 2);
console.log(vrijeme.iznadProsjeka());
console.log(vrijeme.leden());