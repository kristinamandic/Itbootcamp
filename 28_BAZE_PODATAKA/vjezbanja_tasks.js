// 1. Zadatak
db.collection("tasks")
    .orderBy("title")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.title, obj.title, obj.priority);
            });
        }
        else {
            console.log("Nema dokumenta koji odgovara zahtjevu");
        }
    })
    .catch(err => {
        console.log("Doslo je do greske" + err);
    });


// 2. Zadatak
// a) Su prioritetni
db.collection("tasks")
    .where("priority", "==", true)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.title, obj.title, obj.priority);
            });
        }
        else {
            console.log("Nema dokumenta koji odgovara zahtjevu");
        }
    })
    .catch(err => {
        console.log("Doslo je do greske" + err);
    });


// b) Treba da se izvrše u tekućoj godini
let datum = new Date();
let godina = datum.getFullYear();
let krajGodine = new Date(`${godina}-12-31 24:00:00`);
let kraj = firebase.firestore.Timestamp.fromDate(krajGodine);
db.collection("tasks")
    .where("due_date", "<=", kraj)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.title, obj.title, obj.priority);
            });
        }
        else {
            console.log("Nema dokumenta koji odgovara zahtjevu");
        }
    })
    .catch(err => {
        console.log("Doslo je do greske" + err);
    });


// c) Su završeni
