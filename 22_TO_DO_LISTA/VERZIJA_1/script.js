let li = document.querySelectorAll("li");

// MOJ NACIN
// li.forEach(i => {
//     let broj = 0;
//     i.addEventListener("click", () => {
//         broj++;
//         i.style.textDecoration = "line-through";
//         if (broj % 2 == 0) {
//             i.style.textDecoration = "none";
//         }
//     });
// });


// DRUGI NACIN
// li.forEach(i => {
//     i.addEventListener("click", () => {
//         if (i.style.textDecoration == "line-through") {
//             i.style.textDecoration = "none";
//         }
//         else {
//             i.style.textDecoration = "line-through";
//         }
//     });
// });


// TRECI NACIN - ukoliko stavljamo klase na li elemente
li.forEach(i => {
    i.addEventListener("click", () => {
        i.classList.toggle("lineThrough");
    });
});