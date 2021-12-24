console.log("Nizovi objekata");

let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori!",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

// Ispis objekata iz niza pomocu forEach petlje
let arrBlogs = [blog1, blog2, blog3];
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`;
});

// Ispis objekata iz niza pomocu for petlje
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

/* Promjena vrijednosti elementa
blog3.title = "Napredni HTML tagovi";
console.log(blog3.title);
console.log(arrBlogs);
arrBlogs[2].title = "HTML5 tagovi";
console.log(arrBlogs[2].title);
console.log(arrBlogs);
*/

// VJEZBANJE

// 1. Zadatak - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = arr => {
    let sum = 0;

    /* 1. nacin
    arr.forEach(blog => {
        sum += blog.likes;
    });
    */

    // 2. nacin
    for (let i = 0; i < arr.length; i++) {
        // arr[i] je objekat
        // arr[i].likes je broj lajkova objekta arr[i]
        sum += arr[i].likes;
    }
    return sum;
};

console.log(`Ukupan broj lajkova je: ${sumLikes(arrBlogs)}`);

// Lajkovi iz 1. i 3. bloga
let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;
console.log(sum13);

sum13 = arrBlogs[0]["likes"] + arrBlogs[2]["likes"];
console.log(sum13);


// 2. Zadatak - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = (arr, svojstvo) => {
    let s = svojstvo(arr);
    return s / arr.length;
};

console.log(avgLikes(arrBlogs, sumLikes));

// let avgLikes = arr => {
//     let sum = 0;
//     arr.forEach(el => {
//         sum += el.likes;
//     });
//     return sum / arr.length;
// };

// console.log(avgLikes(arrBlogs));


// 3. Zadatak - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let moreLikes = arr => {
    arr.forEach(elem => {
        if (elem.likes > elem.dislikes) {
            console.log(elem.title);
        }
    });
};

console.log("Blogovi sa vise lajkova nego dislajkova:");
moreLikes(arrBlogs);


// 4. Zadatak - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let doubleLikes = arr => {
    arr.forEach(el => {
        if (el.likes >= el.dislikes * 2) {
            console.log(el.title);
        }
    });
};

console.log("Blogovi sa duplo vise lajkova nego dislajkova:");
doubleLikes(arrBlogs);


// 5. Zadatak - Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let exclamation = arr => {
    arr.forEach(el => {
        if (el.title[el.title.length - 1] == "!") {
            console.log(el.title);
        }
    });
};

console.log("Blogovi sa znakom uzvika na kraju:");
exclamation(arrBlogs);