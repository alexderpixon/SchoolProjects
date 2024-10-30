// function Book(tytul, autor, rok, gatunek) {
//     this.tytul = tytul,
//     this.autor = autor,
//     this.rok = rok,
//     this.gatunek = gatunek
// }

// const book1 = new Book("Sherlock Holms", "Agata Kristi", "1994", "Detektyw");
// const book2 = new Book("Red and Black", "Abudaba", "1928", "Triller");

// let book1_all = "";
// for(let x in book1) {
//     book1_all += book1[x] + "<br>";
// }

// let book2_all = "";
// for(let x in book2) {
//     book2_all += book2[x] + "<br>";
// }

// book1.getSummary = function() {
//     return this.tytul + " " + this.autor + " " + this.rok + " " + this.gatunek;
// }

// book2.getSummary = function() {
//     return this.tytul + " " + this.autor + " " + this.rok + " " + this.gatunek;
// }

// console.log(book1.getSummary());
// console.log(book2.getSummary());

// document.getElementById("book1").innerHTML = book1_all;
// document.getElementById("book2").innerHTML = book2_all;

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    let nazwa = document.getElementById("nazwa").value;
    let autor = document.getElementById("autor").value;
    let rok = document.getElementById("rok").value;
    let gatunek = document.getElementById("gatunek").value;

    function Book(nazwa, autor, rok, gatunek) {
        this.nazwa = nazwa,
        this.autor = autor,
        this.rok = rok,
        this.gatunek = gatunek
    }

    function liczba() {
        let i = 0;
        i++;
        console.log(i);
    }
    liczba();

    window

    const book = new Book(nazwa, autor, rok, gatunek);
    let book_all = "";
    for(let x in book) {
        book_all += book[x] + " ";
    }
    console.log(book_all); 
    

}); 

