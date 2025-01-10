// All book objects will be stored in an array
const myLibrary = [];

/**
 * Constructor for the Book object
 * @param {String} title the title of the book
 * @param {String} author the author of the book
 * @param {int} numPages the number of pages in the book
 * @param {boolean} haveRead whether you have read the book or not
 */
function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;

    // Function that can report the book info
    this.info = function() {
        let haveReadString = haveRead ? "read" : "not read yet";
        return title + " by " + author + ", " + numPages + " pages, " + haveReadString;
    }
}

/**
 * Create an instance of a Book object and store the new Book into an array
 * @param {String} title 
 * @param {String} author 
 * @param {int} numPages 
 * @param {boolean} haveRead 
 */
function addBookToLibrary(title, author, numPages, haveRead) {
    // Construct a Book object using the arguments
    let myBook = new Book(title, author, numPages, haveRead);

    // Add myBook to the myLibrary array
    myLibrary.push(myBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 192, true);
addBookToLibrary('No Longer Human', 'Osamu Dazai', 176, true);

// Target the library container div in the HTML
const libraryContainer = document.querySelector(".library-container");

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
