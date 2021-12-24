let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let blog4 = {
    title: "Uvod u JS",
    likes: 150,
    dislikes: 50
};

let blog5 = {
    title: "IF naredba grananja",
    likes: 250,
    dislikes: 160
};


let user1 = {
    username: "JelenaMatejic",
    age: 27,
    blogs: [blog1, blog2, blog3],
    myLikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.likes;
        });
        return suma;
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    myLikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.likes;
        });
        return suma;
    }
};

// Ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

// Naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);

// 1. Zadatak - Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
// Niz korisnika
let users = [user1, user2];

// Ko su autori blogova?
users.forEach(u => {
    console.log(u.username);
});

// Ispisati sve naslove blogova koje su napisali autori iz niza users
users.forEach(u => {  // u je jedan user iz niza
    let blogsU = u.blogs;  // svi blogovi tekuceg korisnika u
    blogsU.forEach(b => {
        console.log(b.title);
    });
});


// 2. Zadatak - Ispisati imena onih autora koji imaju ispod 18 godina
console.log("Ispisati imena onih autora koji imaju ispod 18 godina:");

users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});


// 3. Zadatak - Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log("Ispisati naslove onih blogova koji imaju više od 50 lajkova:");

users.forEach(u => {
    let blogsU = u.blogs; // niz blogova tekuceg korisnika u
    blogsU.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});


// 4. Zadatak - Ispisati sve blogove autora čiji je username ’JelenaMatejic’
console.log("Ispisati sve blogove autora čiji je username 'JelenaMatejic':");

users.forEach(u => {
    let blogsU = u.blogs;
    if (u.username == "JelenaMatejic") {
        blogsU.forEach(b => {
            console.log(b.title);
        });
    }
});


// 5. Zadatak - Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
console.log("Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali:");

// 1. nacin
users.forEach(u => {
    let blogsU = u.blogs;
    let suma = 0;
    blogsU.forEach(b => {
        suma += b.likes;
    });
    if (suma > 200) {
        console.log(u.username);
    }
});

// 2. nacin - napravili smo metode myLikes u user1 i user2 objektima

users.forEach(u => {
    if (u.myLikes() > 200) {
        console.log(u.username);
    }
});


// 6. Zadatak - Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena - treba nam globalni prosjek
console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena:");
/*
users.forEach(u => {
    let blogsU = u.blogs;
    let suma = 0;
    blogsU.forEach(b => {
        suma += b.likes;
    });
    let prosjek = suma / blogsU.length;
    blogsU.forEach(b => {
        if (b.likes > prosjek) {
            console.log(b.title);
        }
    });
});

// 2. nacin
users.forEach(u => {
    let prosjek = u.myLikes() / u.blogs.length;
    u.blogs.forEach(b => {
        if (b.likes > prosjek) {
            console.log(b.title);
        }
    });
});
*/

let globalAvgLikes = arr => {
    let globalSum = 0;  // suma svih lajkova svih korisnika
    let globalBr = 0;  // globalni brojac - broj blogova svih korisnika
    arr.forEach(u => {
        globalSum += u.myLikes(); // dodaj koliko je pojedinacni korisnik imao ukupno lajkova za sve svoje blogove
        globalBr += u.blogs.length; // dodaj koliko je pojedinacni korisnik imao blogova
    });
    return globalSum / globalBr;
};

console.log(`Globalan prosjek lajkova je ${globalAvgLikes(users)}`);


let blogoviSaNatprosjecnoLajkova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > globalAvg) {
                console.log(b.title);
            }
        });
    });
}

blogoviSaNatprosjecnoLajkova(users);


// 7. Zadatak - Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena:");

users.forEach(u => {
    let blogsU = u.blogs;
    let sumaPoz = 0;
    let sumaNeg = 0;
    blogsU.forEach(b => {
        sumaPoz += b.likes;
        sumaNeg += b.dislikes;
    });
    let prosjekPoz = sumaPoz / blogsU.length;
    let prosjekNeg = sumaNeg / blogsU.length;
    blogsU.forEach(b => {
        if (b.likes > prosjekPoz && b.dislikes < prosjekNeg) {
            console.log(b.title);
        }
    });
});


// ZADATAK - VREMENSKA PROGNOZA
