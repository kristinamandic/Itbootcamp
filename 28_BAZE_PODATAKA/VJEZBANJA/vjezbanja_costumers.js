// ZADACI ZA VJEZBANJE
// 1. Zadatak
db.collection("costumers")
    .orderBy("name")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.age, obj.salary);
            });
        }
        else {
            console.log("Nema korisnika sa zadatim uslovom");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

// 2. Zadatak
// a) Imaju adresu u Nišu
db.collection("costumers")
    .where("adresses", "array-contains", "Nis")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.age, obj.salary);
            });
        }
        else {
            console.log("Nema korisnika sa zadatim uslovom");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

// b) Imaju platu veću ili jednaku od 500
db.collection("costumers")
    .where("salary", ">=", 500)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.age, obj.salary);
            });
        }
        else {
            console.log("Nema korisnika sa zadatim uslovom");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

// c) Imaju platu između 300 i 800
db.collection("costumers")
    .where("salary", ">=", 300)
    .where("salary", "<=", 800)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.age, obj.salary);
            });
        }
        else {
            console.log("Nema korisnika sa zadatim uslovom");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

// d) Imaju platu manju od 900, i imaju 30 godina
db.collection("costumers")
    .where("salary", "<=", 900)
    .where("age", "==", 30)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.age, obj.salary);
            });
        }
        else {
            console.log("Nema korisnika sa zadatim uslovom");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


// e) Imaju adresu u Nišu ili Beogradu
db.collection("costumers")
    .where("adresses", "array-contains-any", ["Beograd", "Nis"])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name, obj.age, obj.salary);

                // Nije ovo bas najbolje kiki
                // obj.adresses.forEach(o => {
                //     if (o.includes("Beograd") || o.includes("Nis")) {
                // console.log(obj.name, obj.age, obj.salary);
                // }
                // });
            });
        }
        else {
            console.log("Nema korisnika sa zadatim uslovom");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


// f) Imaju 22, 25 ili 28 godina
db.collection("costumers")
    .where("age", "in", [22, 25, 28])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            console.log(obj.name, obj.age, obj.salary);

            // allDocs.forEach(doc => {
            //     let obj = doc.data();
            //     if (obj.age == 22 || obj.age == 25 || obj.age == 28) {
            //         console.log(obj.name, obj.age, obj.salary);
            //     }
            // });
        }
        else {
            console.log("Nema korisnika sa zadatim uslovom");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });