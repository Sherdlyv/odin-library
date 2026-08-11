const myLibrary = [];

function Book (id,title, author, pages, type) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.type = type;
}


function addBooksToLibrary (){
const book1 = new Book("id", "Le Corbeau", "Jean de la Fontaine", 40, "Fables");

 return myLibrary.push(book1) ;
}

console.log(addBooksToLibrary());

console.log(myLibrary);