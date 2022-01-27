// 1. Zadatak
db.collection("tasks")
    .orderBy("title")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.title, obj.description, obj.priority);
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
                console.log(obj.title, obj.description, obj.priority);
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
let krajGodine = new Date(`${godina}-12-31 23:59:59`);

let krajGodineMls = firebase.firestore.Timestamp.fromDate(krajGodine);
db.collection("tasks")
    .where("due_date", "<=", krajGodineMls)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.title, obj.description, obj.priority);
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
let dan = datum.getDate();
let mjesec = datum.getMonth() + 1;
let sat = datum.getHours();
let minut = datum.getMinutes();
let sekunde = datum.getSeconds();
let datumDanas = new Date(`${godina}-${mjesec}-${dan} ${sat}:${minut}:${sekunde}`);

let datumDanasMls = firebase.firestore.Timestamp.fromDate(datumDanas);
db.collection("tasks")
    .where("due_date", "<", datumDanasMls)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.title, obj.description, obj.priority);
            });
        }
        else {
            console.log("Nema dokumenta koji odgovara zahtjevu");
        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    })


// d) Tek treba da počnu
db.collection("tasks")
    .where("start_date", ">", datumDanasMls)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.title, obj.description, obj.priority);
            });
        }
        else {
            console.log("Nema dokumenta koji odgovara zahtjevu");
        }
    })
    .catch(err => {
        console.log(`Doslo je do greske: ${err}`);
    })