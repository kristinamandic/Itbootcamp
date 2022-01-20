const request = new XMLHttpRequest();

// XMLHttpRequest.readyState:

/*  OVO JE METODOLOSKI
request.addEventListener("readystatechange", () => {
    // Cetiri koraka readystatechange 
    if (request.readyState == 1) {
        console.log("Uspostavljena konekcija, zahtjev nije poslat");
    }
    else if (request.readyState == 2) {
        console.log("Poslat je zahtjev serveru");
    }
    else if (request.readyState == 3) {
        console.log("Prihvata se odgovor u statusu preuzimanja");
    }
    else if (request.readyState == 4) {
        console.log("Odgovor je preuzet", request.responseText);
        // Kompletan odgovor sa servera
    }
    // console.log(request.readyState, request.responseText);
});
*/

// REQUEST.STATUS ako nije 200, desila se neka greska
// U PRAKSI SE OVO KORISTI
// Kada bismo stavili anonimnu, umjesto arrow funkcije, na svakom mjestu gdje je stajalo request unutar eventListenera moze da se stavi THIS
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        // console.log(request.responseText);

        // KONVERTOVANJE = PARSIRANJE
        // JSON = JavaScript Object Nation
        let data = JSON.parse(request.responseText);
        console.log(data);
    }
    else if (request.readyState === 4) {
        console.log("Could not fetch data");
        console.log(request.responseText);
    }
});

// I open() i send() su asingroni pozivi - kreiraju novu nit
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// Kada ispisemo puno consol.log("1"); npr., svi ti consol.logovi su brzi od odgovora koji dobijemo sa servera, odn. oni se prvo ispisu u konzoli
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");