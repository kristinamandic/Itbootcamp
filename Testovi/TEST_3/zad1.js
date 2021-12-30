//Napisati program koji ispisuje sve recepte čiji naziv sadrži slovo “s”, a broj sastojaka je strogo veći od 2.

recepti.forEach(r => {
    if (r.naziv.includes("s") && r.sastojci.length > 2) {
        console.log(r);
    }
});