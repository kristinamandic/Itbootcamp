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


///////////////////////////////////////////////////
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


///////////////////////////////////////////////////
// b) Treba da se izvrše u tekućoj godini
// MOJ NACIN:
// let datum = new Date();
// let godina = datum.getFullYear();
// let krajGodine = new Date(`${godina}-12-31 23:59:59`);
// let pocetakGodine = new Date(`${godina}-01-01 00:00:00`);

// let krajGodineMls = firebase.firestore.Timestamp.fromDate(krajGodine);
// let pocetakGodineMls = firebase.firestore.Timestamp.fromDate(pocetakGodine);
// db.collection("tasks")
//     .where("due_date", "<=", krajGodineMls)
//     .where("due_date", ">=", pocetakGodineMls)
//     .get()
//     .then(snapshot => {
//         if (!snapshot.empty) {
//             let allDocs = snapshot.docs;
//             allDocs.forEach(doc => {
//                 let obj = doc.data();
//                 console.log(obj.title, obj.description, obj.priority);
//             });
//         }
//         else {
//             console.log("Nema dokumenta koji odgovara zahtjevu");
//         }
//     })
//     .catch(err => {
//         console.log("Doslo je do greske" + err);
//     });

// STEFANOV NACIN
let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1);  // 1. januar tekuce godine
let date2 = new Date(year + 1, 0, 1);  // 1. januar naredne godine

let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2);

db.collection("tasks")
    .where("due_date", ">=", date1Timestamp)
    .where("due_date", "<", date2Timestamp)
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


///////////////////////////////////////////////////
// c) Su završeni
// MOJ NACIN - Boze oprosti
// let dan = datum.getDate();
// let mjesec = datum.getMonth() + 1;
// let sat = datum.getHours();
// let minut = datum.getMinutes();
// let sekunde = datum.getSeconds();
// let datumDanas = new Date(`${godina}-${mjesec}-${dan} ${sat}:${minut}:${sekunde}`);

// let datumDanasMls = firebase.firestore.Timestamp.fromDate(datumDanas);
// db.collection("tasks")
//     .where("due_date", "<", datumDanasMls)
//     .get()
//     .then(snapshot => {
//         if (!snapshot.empty) {
//             snapshot.docs.forEach(doc => {
//                 let obj = doc.data();
//                 console.log(obj.title, obj.description, obj.priority);
//             });
//         }
//         else {
//             console.log("Nema dokumenta koji odgovara zahtjevu");
//         }
//     })
//     .catch(err => {
//         console.log(`Doslo je do greske: ${err}`);
//     })

// STEFANOV NACIN
let nowTimestamp = firebase.firestore.Timestamp.fromDate(now);

db.collection("tasks")
    .where("due_date", "<=", nowTimestamp)
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


///////////////////////////////////////////////////
// d) Tek treba da počnu
db.collection("tasks")
    .where("start_date", ">", nowTimestamp)
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
    });