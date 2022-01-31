class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
    }
    // Seter i geter za polje _room
    set room(r) {
        this._room = r;
    }
    get room() {
        return this._room;
    }

    // Seter i geter za polje _username
    set username(u) {
        if (u.length >= 2 && u.length <= 10) {
            this._username = u;
        }
        else {
            alert("Korisnicko ime mora da se sastoji od 2 do 10 karaktera i ne smije da ima praznine!")
        }
    }
    get username() {
        return this._username;
    }
}

export default Chatroom;