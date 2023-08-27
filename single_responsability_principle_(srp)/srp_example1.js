//#region BAD EXAMPLE
// class Book {
//   constructor(private _author: string, private _title: string) {}
//   get author(): string {
//     return this._author;
//   }
//   get title(): string {
//     return this._title;
//   }
//   save(): void {
//   }
// }
// const book = new Book("Manuel Entrena", "Mejores practicas con typescript");
// console.log(book.author);
// console.log(book.title);
//#endregion
//#region GOOD EXAMPLE
var Book = /** @class */ (function () {
    function Book(_author, _title) {
        this._author = _author;
        this._title = _title;
    }
    Object.defineProperty(Book.prototype, "change_author", {
        set: function (author) {
            this._author = author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "changeAuthor", {
        set: function (author) {
            if (author === "")
                throw new Error("The author cannot be empty");
            if (author === "manuel")
                throw new Error("The author cannot be manuel");
            this.change_author = author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
var BookRepository = /** @class */ (function () {
    function BookRepository() {
    }
    BookRepository.prototype.save = function (book) {
        // Save book in the database
        console.log("GUARDANDO EL LIBRO");
    };
    return BookRepository;
}());
var book = new Book("Manuel Entrena", "Los principios solid en typescript");
var repositoryBooks = new BookRepository();
book.changeAuthor = "";
repositoryBooks.save(book);
//#endregion
