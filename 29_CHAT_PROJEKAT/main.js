import Chatroom from "./chat.js";


let chatroom1 = new Chatroom("js", "korisnik1");
console.log(chatroom1.room, chatroom1.username); // Testiranje getera
chatroom1.username = "Milena"; // Testiranje setera za "username"
chatroom1.room = "general"; // Testiranje setera za "room"
console.log(chatroom1);
// chatroom1.addChat("Trening cemo odrzati u srijedu od 18h")
//     .then(() => console.log("Uspjesno dodat cet!"))
//     .catch(err => console.log("Doslo je do greske: " + err));

let chatroom2 = new Chatroom("homeworks", "Jelena");
chatroom2.addChat("Podsjetnik da uradite domaci")
    .then(() => console.log("Uspjesno dodat cet!"))
    .catch(err => console.log("Doslo je do greske: " + err));