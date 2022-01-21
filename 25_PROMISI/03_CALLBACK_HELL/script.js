let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekta:
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            // Sve OK
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if (request.readyState == 4) {
            // Nesto nije OK
            // console.log("Ne mogu da dohvatim podatke");
            callback(undefined, "Ne mogu da dohvatim podatke");
        }
    });

    // 2. Otvaranje kreiranog zahtjeva:
    request.open("GET", resource);

    // 3. Slanje zahtjeva:
    request.send();
};

getTodos("../JSON/todos.json", (data, error) => {
    console.log("Callback okinuta");
    // Ako je error == true, ispisati gresku
    if (error) {
        console.log(error);  // Ispisuj ako je doslo do greske u todos.json fajlu
    }
    else {
        console.log(data);  // Ispisuje podatke iz todos.json dajla

        // Nakon sto su se ispisali podaci iz todos.json, pozivamo sljedeci fajl fruits.json
        getTodos("../JSON/fruits.json", (data, err) => {
            if (err) {
                console.log(err);  // Ispisuje ako je doslo do greske u fruits.json fajlu
            }
            else {
                console.log(data); // Ispisuje podatke iz fruits.json dajla

                // Nakon sto su se ispisali podaci iz fruits.json, pozivamo sljedeci fajl vegetables.json
                getTodos("../JSON/vegetables.json", (data, err) => {
                    if (err) {
                        console.log(err);  // Ako je doslo do greske u vegetables.json fajlu
                    }
                    else {
                        console.log(data);  // Ispisuje podatke iz vegetables.json fajla
                    }
                });
            }
        });
    }
});

console.log("KRAJ");  // Zato sto je ovo aisnhrono programisanje, console.log('KRAJ') se ispisuje prije svega ovoga prije