// 1.
let movie1 = {
    name: "Seven",
    director: "David Fincher",
    release_year: 1996,
    ganres: ["Crime", "Drama"],
    rating: 8.6
};

db.collection("movies").doc("03").set(movie1)
    .then(() => {
        console.log("Film uspjesno dodat u kolekciju filmova");
        // 5.
        return db.collection("movies").doc("03").update(
            {
                "director.name": "George",
                "director.surname": "Fincher"
            }
        )
    })
    .then(() => {
        console.log("Uspjesno promjenjeno ime reditelja");
    })
    .catch(err => {
        console.log("Desila se greska pri dodavanju filma: " + err);
    })

// 2.
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


// 3.
db.collection("movies").doc("01").update(
    {
        ganres: firebase.firestore.FieldValue.arrayUnion("Drama")
    }
)
    .then(() => {
        console.log("Uspjesno dodat zanr");
    })
    .catch(err => {
        console.log(`Neuspjesno dodat zanr ${err}`);
    })


// 4.
db.collection("movies").doc("02").update(
    {
        ganres: firebase.firestore.FieldValue.arrayRemove("Drama")
    }
)
    .then(() => {
        console.log("Uspjesno izbrisan zanr");
    })
    .catch(err => {
        console.log(`Neuspjesno izbrisan zanr ${err}`);
    })