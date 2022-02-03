// Spojnica izmedju logickog i vizuelnog dijela stranice
import Chatroom from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("#poruke");
let inputMessage = document.getElementById("message");
let btnSend = document.getElementById("send");
let inputUsername = document.querySelector("#username");
let btnUpdate = document.querySelector("#update");

// Objekti klasa / Instance klasa
let chatroom = new Chatroom("homeworks", "korisnik1");
let chatUI = new ChatUI(ul);

// Ispis dokumenata db u konzoli
chatroom.getChats(d => {
    console.log(d);
});

// Ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

// Kada je submit dugme Send posalji poruku
btnSend.addEventListener("click", e => {
    e.preventDefault();
    let message = inputMessage.value;
    if (message.trim().length > 0) {
        chatroom.addChat(message)
            .then(() => {
                inputMessage.value = "";
            })
            .catch(err => console.log("Doslo je do greske: " + err));
    }
    else {
        inputMessage.value = "";
    }
});

// Kada je submit dugme Update izmjeni korisnicko ime
btnUpdate.addEventListener("click", e => {
    e.preventDefault();
    let username = inputUsername.value;
    // chatroom2.username = username;
    chatroom.updateUsername(username);
    inputUsername.value = "";
})