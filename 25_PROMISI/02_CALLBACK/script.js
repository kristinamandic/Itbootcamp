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
    if (error) { // Ispisuje gresku
        console.log(error);
    }
    else { // Ispisuje podatke sa kojima moze dalje da raspolaze
        console.log(data);
    }
});

console.log("KRAJ");  // Zato sto je ovo aisnhrono programisanje, console.log('KRAJ') se ispisuje prije svega ovoga prije