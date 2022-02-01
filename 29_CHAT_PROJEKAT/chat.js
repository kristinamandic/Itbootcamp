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
        let u1 = u.trim();
        if (u1.length >= 2 && u1.length <= 10) {
            this._username = u1;
        }
        else {
            alert("Korisnicko ime mora da se sastoji od 2 do 10 karaktera i ne smije da ima praznine!")
        }
    }
    get username() {
        return this._username;
    }

    // Metod za dodavanje nove poruke
    async addChat(mess) {
        // Dohvatanje trenutnog vremena potrebnog za timestamp(created_at polje u dokumentu)
        let date = new Date();

        // Kreiranje dokumenta/objekta koji prosljedjuejmo bazi podataka
        let obj = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };
        // Da sacuvam dokument u db
        let response = await this.chats.add(obj);
        return response; // Vracam Promise i mogu za njega da kazem .then() i .catch()
    }

    // Metod koji prati promjene u bazi i vraca poruke
    getChats(callback) {
        // Stavljamo osluskivac "onSnapshot" na nasu kolekciju "chats" iz baze podataka
        // "onSnapshot" daje sve promjene do tog trenutka
        this.chats
            .where("room", "==", this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                // "snapshot" daje niz tih promjena
                snapshot.docChanges().forEach(change => {
                    // Ispisati dokumente koji su dodati u bazu
                    if (change.type == "added") {
                        // console.log(change.doc.data());
                        callback(change.doc.data()); // prosljedjivanje dokumenta na ispis (ispis realizujemo kada realizujemo callback funkciju)
                    }
                });
            });
    }
};

export default Chatroom;