// db = objekat "baze" (njega vucemo iz HTML fajla)
console.log(db);


// PRISTUPANJE KOLEKCIJI
let costumers = db.collection("costumers");
console.log(costumers);


// PRISTUPANJE DOKUMENTU
// 1. Nacin - preko kolekcije
let doc1 = costumers.doc("01");
console.log(doc1);

// 2. Nacin - preko lancanja poziva
let doc2 = db.collection("tasks").doc("01");
console.log(doc2);

/*
Za pristup dokumentu:
    db.collection("...").doc("...");

Kod dokumenata imamo sljedece operacije:
    CRUD (Create, Read, Update, Delete)

Sve cetiri metode kao rezultat vracaju PROMISE - rade asinhrono:
    Create : doc.set(...);
    Read   : doc.get(...);
    Update : doc.update(...);
    Delete : doc.delete(...);
Sto znaci, nakon njih lancamo .then() i .catch()
*/

///////////////////////////////////////////
// DODAVANJE DOKUMENATA U KOLEKCIJU

let obj = {
    name: "Pera",
    age: 22,
    adresses: ["Nis", "Leskovac"],
    salary: 470.00
};

// OVO SU ASINHRONI
// db.collection("costumers").doc("04").set(obj)
//     .then(() => {
//         console.log("Dodat novi dokument u kolekciju 'costumers'");
//     })
//     .catch((err) => {
//         console.log("Greska prilikom dodavanja novog dokumenta: " + err);
//     });

// Nadodavanje na prosli dokument
// db.collection("costumers").doc("04").set(
//     { height: 180 },
//     { merge: true }  // kljucna rijec za nadodavanje na document
// )
//     .then(() => {
//         console.log("Spojen dokument '04' u kolekciju 'costumers'");
//     })
//     .catch((err) => {
//         console.log("Greska prilikom dodavanja novog dokumenta: " + err);
//     });

// ZATO TREBAJU DA SE PISU OVAKO:
db.collection("costumers").doc("04").set(obj)
    .then(() => {
        console.log("Dodat novi dokument u kolekciju 'costumers'");
        return db.collection("costumers").doc("04").set(
            { height: 180 },
            { merge: true }
        )
    })
    .then(() => {
        console.log("Spojen dokument '04' u kolekciju 'costumers'");
    })
    .catch((err) => {
        console.log("Greska prilikom dodavanja novog dokumenta: " + err);
    });


// Dodavanje novog taska

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugarima iz ITBootcamp-a"
};

db.collection("tasks")
    .doc("04")
    .set(obj2)
    .then(() => {
        console.log("Uspjesno dodat task");
    })
    .catch(err => {
        console.log("Neuspjesno dodat task");
    });



///////////////////////////////////////////
// AZURIRANJE POSTOJECIH DOKUMENATA

db.collection("tasks")
    .doc("02")
    .update({
        priority: false
    })
    .then(() => {
        console.log("Uspjesno promjenjeno polje u dokumentu");
    })
    .catch(err => {
        console.log("Greska prilikom mjenjanja dokumenta: " + err);
    });



///////////////////////////////////////////
// AZURIRANJE POSTOJECIH DOKUMENATA

db.collection("costumers")
    .doc("01")
    .delete()
    .then(() => {
        console.log("Uspjesno izbrisan dokument");
    })
    .catch(err => {
        console.log(`Greska prilikom brisanja ${err}`);
    });


console.log("Test poruka");


////////////////////////////////////////////////
// Drugi nacin za dodavanje dokumenata
// Ne mozemo dodati ID dokumenta i zbog toga nije prakticno, svaki put kada refreshujemo tranicu dodace se isti takav dokument da drugim random generisanim ID-jem
db.collection("tasks")
    .add({
        title: "Vjezba za projekat",
        description: "Vjezbanje JS",
        start_date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
        due_date: null,
        priority: true
    })
    .then(() => {
        console.log("Uspjesno dodat zadatak u kolekciju tasks");
    })
    .catch(err => {
        console.log(("Desila se greska: " + err));
    });

/*
db.collection("...").add()  <=>  db.collection("...").doc().set()
    - dodaje novi dokument sa random generisanim ID-jem

db.collection("...").doc(id).set()
    - dodaje novi dokument sa zadatim ID-jem
*/
