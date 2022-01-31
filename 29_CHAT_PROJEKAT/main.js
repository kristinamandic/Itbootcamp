import Chatroom from "./chat.js";


let chatroom1 = new Chatroom("js", "korisnik1");
console.log(chatroom1.room, chatroom1.username); // Testiranje getera
chatroom1.username = "Kristina"; // Testiranje setera za "username"
chatroom1.room = "homeworks"; // Testiranje setera za "room"
console.log(chatroom1);