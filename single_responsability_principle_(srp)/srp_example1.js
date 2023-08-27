//#region BAD EXAMPLE
// class Book {
//   constructor(private _author: string, private _title: string) {}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Book(author, title) {
        this._author = author;
        this._title = title;
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
var Aventure = /** @class */ (function (_super) {
    __extends(Aventure, _super);
    function Aventure(author, title, history) {
        var _this = _super.call(this, author, title) || this;
        _this._history = "";
        _this._history = history;
        return _this;
    }
    Object.defineProperty(Aventure.prototype, "history", {
        get: function () {
            return this._history;
        },
        enumerable: true,
        configurable: true
    });
    return Aventure;
}(Book));
var BookRepository = /** @class */ (function () {
    function BookRepository() {
    }
    BookRepository.prototype.resume = function (book) {
        if (book instanceof Aventure) {
            console.log("El libro de " + book.author + " con t\u00EDtulo " + book.title + " trata de " + book.history);
        }
        else {
            console.log("El libro de " + book.author + " con t\u00EDtulo " + book.title + " no tiene historia.");
        }
    };
    return BookRepository;
}());
var aventure = new Aventure("Manuel Entrena", "historia de la programación", "La historia de como me converti en programador");
var book = new Book("J.R. Tolkien", "The Lord of the Ring");
var repositoryBooks = new BookRepository();
repositoryBooks.resume(aventure);
repositoryBooks.resume(book);
//#endregion
