let myLibrary = []; 

function Book (title, author, pages, type,read = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.type = type;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read; 
};



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

    row.setAttribute("data-id", book.id);

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


    const tdAction = document.createElement("td");
    tdAction.classList.add("data");

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";


       deleteButton.addEventListener("click", () => {
        
          const bookIdToDelete = row.getAttribute("data-id");

          myLibrary = myLibrary.filter(item => item.id !== bookIdToDelete);
        
          row.remove();
    });



       const tdStatus = document.createElement("td");
    tdStatus.classList.add("data");

    const statusButton = document.createElement("button");
    
    statusButton.textContent = book.read ? "Read" : "Not Read";
    statusButton.style.backgroundColor = book.read ? "green" : "orange";
    statusButton.style.color = "white";

    statusButton.addEventListener("click", () => {
        book.toggleReadStatus();

        statusButton.textContent = book.read ? "Read" : "Not Read";
        statusButton.style.backgroundColor = book.read ? "green" : "orange";
    });


     tdStatus.appendChild(statusButton);
    row.appendChild(tdStatus);

     tdAction.appendChild(deleteButton);
      row.appendChild(tdAction); 
     table.appendChild(row);

})};

button.addEventListener("click", ()  =>  {
    displayBook();
});




// add button for new books

function addNewBook (){

    const form = document.createElement('form');
    form.id = "book-form";

    const labelTitle = document.createElement('label');
    labelTitle.textContent = "Title";

    const inputTitle = document.createElement('input');
    inputTitle.type ="text";
    inputTitle.id = "input-title";

    const labelAuthor = document.createElement('label');
    labelAuthor.textContent = "Author";
    const inputAuthor = document.createElement('input');
    inputAuthor.type = "text";
    inputAuthor.author ="input-author";

     const labelPages = document.createElement('label');
    labelPages.textContent = "Pages";
    const inputPages= document.createElement('input');
    inputPages.type = "number";
    inputPages.pages="input-pages";

     const labelType = document.createElement('label');
    labelType.textContent = "Type";
    const inputType= document.createElement('input');
    inputType.type = "text";
    inputType.type="input-type";

    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Book";

   form.appendChild(labelTitle);
    form.appendChild(inputTitle);
    
    form.appendChild(labelAuthor);
    form.appendChild(inputAuthor);
    
    form.appendChild(labelPages);
    form.appendChild(inputPages);
    
    form.appendChild(labelType);
    form.appendChild(inputType);
    
    form.appendChild(submitBtn);
    
     container.appendChild(form);

     form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        
        const title = inputTitle.value;
        const author = inputAuthor.value;
        const pages = parseInt(inputPages.value) || 0; 
        const type = inputType.value;

        
        const newBook = new Book(title, author, pages, type);

        
        myLibrary.push(newBook);

        
        form.reset();

        
        displayBook(); 
    });

}

const formButton = document.createElement('button');

formButton.style.color = "Blue";

formButton.textContent = "New Book"

container.appendChild(formButton);

formButton.addEventListener ("click", () => {

    addNewBook();
});


