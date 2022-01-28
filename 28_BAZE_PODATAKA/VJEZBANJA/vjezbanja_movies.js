// 1. Zadatak - Iz kolekcije movies, pročitati sve filmove:
// a) Koje je režirao George Lucas
db.collection("movies")
    .where("director.name", "==", "Bryan")
    .where("director.surname", "==", "Singer")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.director, obj.rating, obj.release_year);
            });
        }
        else {
            console.log("Nema filma koji odgovara zahtjevima");
        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    });


/////////////////////////////////////////////////////
// b) Čija je ocena između 5 i 10
db.collection("movies")
    .where("rating", ">=", 8.5)
    .where("rating", "<=", 8.7)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.director, obj.rating, obj.release_year);
            });
        }
        else {
            console.log("Nema filma koji odgovara zahtjevima");
        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    });


/////////////////////////////////////////////////////
// b) Kojima je žanr komedija, tragedija ili drama
db.collection("movies")
    .where("ganres", "array-contains-any", ["Horror", "Drama"])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.director, obj.rating, obj.release_year);
            });
        }
        else {

        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    });


/////////////////////////////////////////////////////
// b) Koji su izašli u 21. veku
let centuryBegins = 2001;
let centuryEnds = 2101;

db.collection("movies")
    .where("release_year", ">=", centuryBegins)
    .where("release_year", "<", centuryEnds)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.director, obj.rating, obj.release_year);
            });
        }
        else {
            console.log("Nema filma koji odgovara zahtjevima");
        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    });


/////////////////////////////////////////////////////
// 2. Zadatak - Prikazati sve informacije o najbolje rangiranom filmu
db.collection("movies")
    .orderBy("rating", "desc")
    .limit(1)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.director, obj.rating, obj.release_year);
            });
        }
        else {
            console.log("Nema filma koji odgovara zahtjevima");
        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    });


/////////////////////////////////////////////////////
// 3. Zadatak - Prikazati sve informacije o najslabije rangiranoj drami
db.collection("movies")
    .where("ganres", "array-contains", "Drama")
    .orderBy("rating")
    .limit(1)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.director, obj.rating, obj.release_year);
            });
        }
        else {
            console.log("Nema filma koji odgovara zahtjevima");
        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    });