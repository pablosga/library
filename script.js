const myLibrary = [
    {
        title: "Deep Work",
        author: "Cal Newport",
        pages: 273,
        status: "Already Readed",
    },
    {
        title: "Can't Hurt Me",
        author: "David Goggins",
        pages: 312,
        status: "Already Readed",
    },
    {
        title: "So Good They Can't Ignore You",
        author: "Cal Newport",
        pages: 247,
        status: "Already Readed",
    }
];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBook(book) {
    myLibrary.push(book);
};

function changeReaded(indexToChange) {
    myLibrary[parseInt(indexToChange)].status == "Already Readed"? myLibrary[parseInt(indexToChange)].status = "Not Readed Yet": myLibrary[parseInt(indexToChange)].status = "Already Readed";
    printLibrary();
};

function printLibrary() {
    let contenedor = document.querySelector("main");
    contenedor.innerHTML = "";
    let bookIndex = 0;
    for (book of myLibrary) {
        let card = document.createElement("div");
        document.querySelector("main").appendChild(card);
        card.classList.add(bookIndex);
        for (item in book) {
            let text = document.createElement("div");
            text.textContent = `${item}: ${book[item]}`;
            card.appendChild(text);
        };
        bookIndex++;
        createButtons(card, "delete");
        createButtons(card, "change")
    }
    createBookSection();
};

function createBookSection() {
    let newBook = document.createElement("div");
    document.querySelector("main").appendChild(newBook);
    newBook.classList.add("add-book-container")
    createButtons(newBook, "add-book")
};

function getInputValues() {
    let inputs = Array.from(document.querySelectorAll(".inputs"));
    let newBookInfo = inputs.map((input) => input.value);
    return newBookInfo;
};

function createNewBook() {
    let newBook = new Book(getInputValues()[0], getInputValues()[1], getInputValues()[2], getInputValues()[3]);
    addBook(newBook);
    printLibrary();
};

function createButtons(card, typeOfButton) {
    let button = document.createElement("button");
    button.textContent = typeOfButton;
    button.classList.add(typeOfButton);
    card.appendChild(button);
};

function deleteBook(indexToDelete) {
    myLibrary.splice(parseInt(indexToDelete), 1);
    printLibrary();
};

printLibrary();


document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        let indexToDelete = e.target.parentNode.classList[0];
        deleteBook(indexToDelete);
    } else if (e.target.classList.contains("change")) {
        let indexToChange = e.target.parentNode.getAttribute("class");
        changeReaded(indexToChange);
    } else if (e.target.classList.contains("add-book")) {
        document.querySelector("dialog").showModal();
    } else if (e.target.classList.contains("cancel")) {
        document.querySelector("dialog").close();
    } else if (e.target.classList.contains("confirm")) {
        if (document.querySelector("form").checkValidity()) {
            createNewBook();
            document.querySelector("dialog").close();  
            document.querySelector("form").reset();  
        }
    }
});






