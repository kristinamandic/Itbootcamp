// 1. Dodaje nekoliko filmova u bazu
let movie1 = {
    name: "Se7en",
    director: "David Fincher",
    release_year: 1996,
    ganres: ["Crime", "Drama"],
    rating: 8.6
};

// Dodavanje prvog filma
db.collection("movies").doc("03").set(movie1)
    .then(() => {
        console.log("Film 1 uspjesno dodat u kolekciju filmova");
        // 5. Menja ime ili prezime nekom režiseru.
        return db.collection("movies").doc("03").update(
            {
                "director.name": "George",
                "director.surname": "Fincher"
            }
        )
    })
    .then(() => {
        console.log("Uspjesno promjenjeno ime rezisera");
    })
    .catch(err => {
        console.log("Desila se greska pri dodavanju filma 1: " + err);
    })

let movie2 = {
    name: "The Silence of the Lambs",
    director: "Jonathan Demme",
    release_year: 1991,
    ganres: ["Thriller", "Horror"],
    rating: 8.6
};

// Dodavanje drugog filma
db.collection("movies").doc("04").set(movie2)
    .then(() => {
        console.log("Film 2 uspjesno dodat u kolekciju filmova");
        // 2. Menja podatke o nekim filmovima u bazi
        return db.collection("movies").doc("04").update({
            release_year: 1992
        })
    })
    .then(() => {
        console.log("Uspjesno promjenjena godina izdanja filma");
    })
    .catch(err => {
        console.log("Doslo je do greske prilikom dodavanja filma 2: " + err);
    })

// 2. Menja podatke o nekim filmovima u bazi
db.collection("movies").doc("02").update(
    {
        rating: 8.8
    }
)
    .then(() => {
        console.log("Uspjesno promjenjene ocjene filma");
    })
    .catch(err => {
        console.log("Doslo je do greske pri promjeni ocjene filma" + err);
    })


// 3. Dodaje žanr nekom filmu
db.collection("movies").doc("01").update(
    {
        ganres: firebase.firestore.FieldValue.arrayUnion("Drama")
    }
)
    .then(() => {
        console.log("Uspjesno dodat zanr");
    })
    .catch(err => {
        console.log(`Doslo je do greske pre dodavanju zanra ${err}`);
    })


// 4. Briše žanr nekom filmu
db.collection("movies").doc("02").update(
    {
        ganres: firebase.firestore.FieldValue.arrayRemove("Drama")
    }
)
    .then(() => {
        console.log("Uspjesno izbrisan zanr");
    })
    .catch(err => {
        console.log(`Doslo je do greske prilikom brisanja zanra ${err}`);
    })