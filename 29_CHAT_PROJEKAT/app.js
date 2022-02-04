// Spojnica izmedju logickog i vizuelnog dijela stranice
import Chatroom from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("#messages");
let inputMessage = document.getElementById("message");
let btnSend = document.getElementById("send");
let inputUsername = document.querySelector("#username");
let btnUpdate = document.querySelector("#update");
let navBar = document.querySelector("#menu");
let formUpdate = document.getElementById("formUpdate");

// Objekti klasa / Instance klasa
let username = "anonymus";
if (localStorage.username) {
    username = localStorage.username;
}
let room = "general";
if (localStorage.room) {
    room = localStorage.room;
}
let chatroom = new Chatroom(room, username);
let chatUI = new ChatUI(ul);

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
    chatroom.updateUsername(username);
    inputUsername.value = "";
    localStorage.setItem("username", username);
});


// Prelazak iz sobe u sobu
navBar.addEventListener("click", e => {
    if (e.target.tagName == "LI") {
        // 1. Izbrisati sve poruke sa ekrana
        chatUI.clear();

        // 2. Mjenjanje soba
        chatroom.room = e.target.id;
        localStorage.setItem("room", chatroom.room);

        // 3. Prikaz poruka
        chatroom.getChats(d => {
            chatUI.templateLI(d);
        });
    }
});