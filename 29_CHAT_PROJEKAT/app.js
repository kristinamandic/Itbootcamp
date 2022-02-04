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
let section = document.querySelector("section");
let btnChoose = document.getElementById("choose");
let inputColor = document.getElementById("color");
// inputColor.value = 

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
    location.reload();
});


// Prelazak iz sobe u sobu
navBar.addEventListener("click", e => {
    if (e.target.tagName == "LI") {
        // 1. Izbrisati sve poruke sa ekrana
        chatUI.clear();
        // 2. Mjenjanje soba
        chatroom.updateRoom(e.target.id);
        localStorage.setItem("room", chatroom.room);
        // 3. Prikaz poruka
        chatroom.getChats(d => {
            chatUI.templateLI(d);
        });
    }
});

// Brisanje poruke
ul.addEventListener("click", e => {
    console.log(e.target.tagName);
    let li = e.target.parentElement;
    if (e.target.tagName == "IMG") {
        if (li.classList.contains("me")) {
            if (confirm("Are you sure you want to delete this message?")) {
                li.remove();
                let liID = li.id;
                // db.collection("chats").doc(liID).delete();
                chatroom.deleteMsg(liID);
            }
        }
        else {
            li.remove();
        }
    }
});


// Biranje boje
// localStorage.setItem("color", "#ffffff");
inputColor.value = "#e3decb";

btnChoose.addEventListener("click", e => {
    e.preventDefault();
    let inputColorValue = inputColor.value;
    setTimeout(() => {
        localStorage.setItem("color", inputColorValue);
        section.style.backgroundColor = inputColorValue;
    }, 500);
});

section.style.backgroundColor = localStorage.color;