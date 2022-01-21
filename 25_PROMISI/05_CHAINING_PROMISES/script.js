// PREKO PROMISA RJESAVAMO FAJLOVE IZ CALLBACK HELLA
let getTodos = resource => {
    // 1. Kreiranje XML objekta:
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahtjeva:
    request.open("GET", resource);

    // 3. Slanje zahtjeva:
    request.send();


    let p = new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) {
                resolve(request.responseText);
            }
            else if (request.readyState == 4) {
                reject("Ne mogu da dohvatim podatke");
            }
        });
    });
    return p;
};

// 1. da se ucita todos.json fajl
// 2. da se ucita fruits.json fajl
// 3. da se ucita vegetables.json fajl
getTodos("../JSON/todos.json").then(data => {
    console.log("Promise todos resolved:", data);
    return getTodos("../JSON/fruits.json");  // vracam Promise na koji se odnosi naredni .then()
}).then(data => {
    console.log("Promise fruits resolved:", data);
    return getTodos("../JSON/vegetables.json");
}).then(data => {
    console.log("Promise vegetables resolved:", data);
}).catch(err => {
    console.log("Promise rejected:", err);
})


// Zato sto je ovo aisnhrono programisanje, console.log('KRAJ') se ispisuje prije svega ovoga prije
console.log("KRAJ");