// Spojnica izmedju logickog i vizuelnog dijela stranice
import Chatroom from "./chat.js";
import { ChatUI } from "./ui.js";


let chatroom1 = new Chatroom("js", "korisnik1");
console.log(chatroom1.room, chatroom1.username); // Testiranje getera
chatroom1.username = "Milena"; // Testiranje setera za "username"
chatroom1.room = "general"; // Testiranje setera za "room"
console.log(chatroom1);
// chatroom1.addChat("Trening cemo odrzati u srijedu od 18h")
//     .then(() => console.log("Uspjesno dodat cet!"))
//     .catch(err => console.log("Doslo je do greske: " + err));

let chatroom2 = new Chatroom("homeworks", "Jelena");
// chatroom2.addChat("Podsjetnik da uradite domaci")
//     .then(() => console.log("Uspjesno dodat cet!"))
//     .catch(err => console.log("Doslo je do greske: " + err));


// Ispis dokumenata db u konzoli
chatroom2.getChats(d => {
    console.log(d);
});

///////////////////////////////////////////
let ul = document.querySelector("#poruke");
let chatUI1 = new ChatUI(ul);
console.log(chatUI1.element);


// Ispis dokumenata iz db na stranici
chatroom2.getChats(d => {
    chatUI1.templateLI(d);
});