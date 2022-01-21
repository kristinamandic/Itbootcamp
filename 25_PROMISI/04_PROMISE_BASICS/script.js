let getSomething = () => {
    // Promise kao parametar ocekuje callback funkciju
    let obj = new Promise((resolve, reject) => {
        // Resolve i reject - ugradjene funkcije - ispisace sve sto smo joj zadali ukoliko je sve dobro proslo (resolve), i ukoliko nije sve dobro proslo (reject)
        // resolve("Nesto RESOLVE"); // Sve ok proslo - onda je resolve
        reject("Nesto REJECT"); // Nesto nije ok proslo - doslo je do neke greske
    });
    // console.log(obj);
    return obj;  // vraca Promise objekat
}

// Ako je Promise vratio RESOLVE realizuje se .than() grana
// Ako je Promise vratio REJECT realizuje se .catch() grana
getSomething().then(data => {
    // data - dobija vrijednost one poruke koja se prosljedjuje u RESOLVE-u
    console.log(`Aktivirana je .then grana ${data}`);
}).catch(err => {
    // err - dobija vrijednost one poruke koja se prosljedjuje u REJECT-u
    console.log(`Aktivirana je .catch grana ${err}`);
});