// All book objects will be stored in an array
const myLibrary = [];

/**
 * Constructor for the Book object
 * @param {String} title the title of the book
 * @param {String} author the author of the book
 * @param {int} pages the number of pages in the book
 * @param {boolean} read whether you have read the book or not
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Function that can report the book info
    this.info = function() {
        let readString = read ? "read" : "not read yet";
        return title + " by " + author + ", " + pages + " pages, " + readString;
    }
}

/**
 * Create an instance of a Book object and store the new Book into an array
 * @param {String} title 
 * @param {String} author 
 * @param {int} pages 
 * @param {boolean} read 
 */
function addBookToLibrary(title, author, pages, read) {
    // Construct a Book object using the arguments
    let myBook = new Book(title, author, pages, read);

    // Add myBook to the myLibrary array
    myLibrary.push(myBook);

    console.log(myBook.info()); // placeholder
}

// Populate the array with some initial elements
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 192, true);
addBookToLibrary('No Longer Human', 'Osamu Dazai', 176, true);

// Target the library container div in the HTML
const libraryContainer = document.querySelector(".library-container");

/**
 * Loops through the myLibrary array and displays each book on the page
 */
function displayAllBooks()
{
    // Reset the contents of libraryContainer first
    libraryContainer.textContent = "";

    // Loop through the array
    for (let book of myLibrary) {
        // Create an HTML element to display the book
        const bookContainer = document.createElement("div");
        bookContainer.style.backgroundColor = "aliceblue";
        const bookTitleElement = document.createElement("h2");
        bookTitleElement.textContent = book.title;
        const bookAuthorElement = document.createElement("h3");
        bookAuthorElement.textContent = book.author;
        const bookPagesElement = document.createElement("p");
        bookPagesElement.textContent = book.pages + " pages";
        const bookReadElement = document.createElement("p");
        bookReadElement.textContent = "Read: " + book.read;
        // Append everything to the DOM
        bookContainer.appendChild(bookTitleElement);
        bookContainer.appendChild(bookAuthorElement);
        bookContainer.appendChild(bookPagesElement);
        bookContainer.appendChild(bookReadElement);
        libraryContainer.appendChild(bookContainer);
    }
}

// Call the displayAllBooks function on the initial elements of the array
displayAllBooks();

// Target the form element in the HTML
const newBookForm = document.querySelector(".new-book-form");
// Add an event listener to the form on submission
newBookForm.addEventListener("submit", (event) => {
    // Prevent default behavior for the submit event,
    // which would otherwise try to send the data to a server
    event.preventDefault();

    // Access the data entered into the form
    let title = newBookForm.elements['title'].value;
    let author = newBookForm.elements['author'].value;
    let pages = newBookForm.elements['pages'].value;
    let read = newBookForm.elements['read'].value;
    // Pass in the form data to the addBookToLibrary function
    addBookToLibrary(title, author, pages, read);
    // Call the displayAllBooks function to update the DOM to display the new book
    displayAllBooks();
})
