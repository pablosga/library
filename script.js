const myLibrary = [
    {
        title: "Deep Work",
        author: "Cal Newport",
        pages: 273,
        readed: true,
    },
    {
        title: "Can't Hurt Me",
        author: "David Goggins",
        pages: 312,
        readed: true,
    },
    {
        title: "So Good They Can't Ignore You",
        author: "Cal Newport",
        pages: 247,
        readed: true,
    }
];

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
};

function addBook(book) {
    myLibrary.push(book);
};

function changeReaded(book) {
    book.readed ? book.readed = false: book.readed = true;
};

function showLibrary() {
    for (book of myLibrary) console.log(book);
};


