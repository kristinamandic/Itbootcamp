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
let section = document.querySelector("section");
let btnChoose = document.getElementById("choose");
let inputColor = document.getElementById("color");
let inputFromDate = document.getElementById("from");
let inputToDate = document.getElementById("to");
let btnDate = document.getElementById("date");
let navElements = document.querySelectorAll("#menu ul li");

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
    e.preventDefault();
    if (e.target.tagName == "LI") {
        // 1. Izbrisati sve poruke sa ekrana
        chatUI.clear();
        // 2. Mjenjanje soba
        chatroom.updateRoom(e.target.id);
        localStorage.setItem("room", chatroom.room);
        location.reload();
        // 3. Prikaz poruka
        chatroom.getChats(d => {
            chatUI.templateLI(d);
        });
    }
});

// Brisanje poruke
ul.addEventListener("click", e => {
    e.preventDefault();
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

// Biranje boje ceta
inputColor.value = "#ffffff";
btnChoose.addEventListener("click", e => {
    e.preventDefault();
    let inputColorValue = inputColor.value;
    setTimeout(() => {
        localStorage.setItem("color", inputColorValue);
        section.style.backgroundColor = inputColorValue;
    }, 500);
});
section.style.backgroundColor = localStorage.color;

// Biranje datuma i vremena poruka koje zelimo da se prikazu
btnDate.addEventListener("click", e => {
    e.preventDefault();
    // From date
    let inputFromDateValue = inputFromDate.value;
    let fromDate = new Date(inputFromDateValue);
    fromDate = firebase.firestore.Timestamp.fromDate(fromDate);
    // To date
    let inputToDateValue = inputToDate.value;
    let toDate = new Date(inputToDateValue);
    toDate = firebase.firestore.Timestamp.fromDate(toDate);
    // Brisanje poruka sa ekrana
    chatUI.clear();
    // Dodavanje poruka na ekran
    chatroom.updateRoom(localStorage.room);
    chatroom.getChats(d => {
        let msgSent = d.data().created_at;
        if (msgSent.seconds > fromDate.seconds && msgSent.seconds < toDate.seconds) {
            chatUI.templateLI(d);
        }
    });
});

// Oznacavanje sobe u kojoj smo
navElements.forEach(li => {
    li.classList.remove("this_room");
    if (li.id == localStorage.room) {
        li.classList.add("this_room");
    }
})