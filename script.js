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
    this.numPages = pages;
    this.haveRead = read;

    // Function that can report the book info
    this.info = function() {
        let haveReadString = read ? "read" : "not read yet";
        return title + " by " + author + ", " + pages + " pages, " + haveReadString;
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
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 192, true);
addBookToLibrary('No Longer Human', 'Osamu Dazai', 176, true);

// Target the library container div in the HTML
const libraryContainer = document.querySelector(".library-container");

/**
 * 
 */
function displayAllBooks()
{
    // Loop through the array
    for (let book of myLibrary) {
        // Create an HTML element to display the book
        const bookContainer = document.createElement("div");
        const bookTitleElement = document.createElement("h2");
        bookTitleElement.textContent = book.title;
        const bookAuthorElement = document.createElement("h3");
        bookAuthorElement.textContent = book.author;
        const bookNumPagesElement = document.createElement("p");
        bookNumPagesElement.textContent = book.numPages + " pages";
        bookContainer.appendChild(bookTitleElement);
        bookContainer.appendChild(bookAuthorElement);
        bookContainer.appendChild(bookNumPagesElement);
        libraryContainer.appendChild(bookContainer);
        console.log(book.info()); // Placeholder
    }
}

displayAllBooks();
