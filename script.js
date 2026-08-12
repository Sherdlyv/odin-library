const myLibrary = [];

function Book (title, author, pages, type) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.type = type;
}


function addBooksToLibrary (){
const book1 = new Book( "Le Corbeau", "Jean de la Fontaine", 40, "Fables");

const book2 = new Book( "L'Histoire de 1804", "Vernain Shella", 350, "Histoty");

const book3 = new Book("Passion & Power", "Esther de la Rose", 200, "Roman d'amour");

myLibrary.push(book1) ;
myLibrary.push(book2);
myLibrary.push(book3);

return myLibrary;
}

console.log(addBooksToLibrary());



// add a button

const container = document.querySelector(".container");

const button = document.createElement('button');

button.style.color = "green";
button.textContent = "Books";

container.appendChild(button);


// add the function display

function displayBook (){

const table = document.querySelector("#library-body");

table.innerHTML = "";

  myLibrary.forEach(book => {
    
    const row = document.createElement("tr");

     const tdId = document.createElement("td");
    tdId.classList.add("data");
    tdId.textContent = book.id ;
    row.appendChild(tdId);

     const tdTitle = document.createElement("td");
    tdTitle.classList.add("data");
    tdTitle.textContent = book.title ;
    row.appendChild(tdTitle);

     const tdAuthor = document.createElement("td");
    tdAuthor.classList.add("data");
    tdAuthor.textContent = book.author ;
    row.appendChild(tdAuthor);

     const tdPages = document.createElement("td");
    tdPages.classList.add("data");
    tdPages.textContent = book.pages || 0;
    row.appendChild(tdPages);

    const tdType = document.createElement("td");
    tdType.classList.add("data");
    tdType.textContent = book.type ;
    row.appendChild(tdType);

     table.appendChild(row);

})};

button.addEventListener("click", ()  =>  {
    displayBook();
});
