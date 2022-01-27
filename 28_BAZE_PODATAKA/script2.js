// READ - Citanje dokumenata
// 1) Opcija - pristupanje konkretnom elementu u kolekciji
// 2) Opcija - pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1)
db.collection("costumers")
    .doc("02")
    .get()
    .then(doc => {
        if (doc.exists) {
            console.log(`Postoji dokument ciji je id: ${doc.id}`);
            let obj = doc.data();
            console.log(obj);
        }
        else {
            console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
        }
        // Polja: doc.id ( string ), doc.exists ( boolean )
        // Metoda: doc.data() - konvertuje dokument u JS objekat
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokument: ${err}`);
    });



// 2) 
db.collection("costumers")
    .get()  // get metoda - vraca sve dokumente
    .then(snapshot => { // snapshot = slika trenutnog stanja
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                console.log(doc.id, doc.data());
            });
        }
        else {
            console.log("Nema dokumenata u kolekciji");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });



//////////////////////////////////////////////////
// 1) Dohvatanje elemenata u odredjenom redosljedu
// 2) Dohvatanje odredjenog broja dokumenata iz kolekcije
// 3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume

// 1) Dohvatanje elemenata u odredjenom redosljedu
db.collection("costumers")
    .orderBy("age", "desc") // sortira objekte po nekom parametru - po defaultu radi rastuci poredak; uz kljucnu rijec "desc"(descending) kao drugi parametar = sortira po opadajucem redosljedu; a moze i kljucna rijec "asc"(ascending) = rastuci, ali i ne mora jer je to difoltna vrijednost
    // Kada zelimo da redjamo dokumente po vise parametara, mora se kreirati index u firebase-u - moze rucno ili preko linka koji se pojavi u konzoli
    .orderBy("name")
    .get()
    .then(snapshot => { // snapshot = slika trenutnog stanja
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + ", " + obj.age + ", " + obj.salary);
            });
        }
        else {
            console.log("Nema dokumenata u kolekciji");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    })


// 2) Dohvatanje odredjenog broja dokumenata iz kolekcije
db.collection("costumers")
    .orderBy("name")
    .orderBy("age", "desc")
    .orderBy("salary", "desc")
    .limit(1) // koliko dokumenata zelimo da prikazemo
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + ", " + obj.age + ", " + obj.salary);
            });
        }
        else {
            console.log("Nema dokumenata u kolekciji");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    })


// 3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume
db.collection("costumers")
    .where("age", "<=", 25) // "<", "<=", "==", ">=", ">" - kada se koristi ovo, prva stvar sa kojom mozemo da uporedjujemo elemente jeste to polje koje smo koristili u metodi .where() - u ovom slucaju "age"
    // .where("salary", "==", 600) - ako koristimo vise metoda .where() moramo kreirati index za ta polja - ali te ostale metode se moraju porediti po jednakosti
    // .where("salary", ">=", 600) - NE radi! - ne moze se porediti vise razlicitih polja po nedednakosti
    .orderBy("age", "desc")
    .orderBy("name")
    .limit(1)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + ", " + obj.age + ", " + obj.salary);
            });
        }
        else {
            console.log("Nema dokumenata u kolekciji");
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    })