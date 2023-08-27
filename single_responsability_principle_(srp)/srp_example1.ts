
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
class Book {
  constructor(private _author: string, private _title: string) {}

  private set change_author(author: string) {
    this._author = author;
  }

  public set changeAuthor(author: string) {
    if(author === "") throw new Error("The author cannot be empty");
    if(author === "manuel") throw new Error("The author cannot be manuel");
    this.change_author = author;
  }

  public get author(): string {
    return this._author;
  }

  public get title(): string {
    return this._title;
  }
}

interface RepositoryInterface<T> {
  save(entity: T): void;
}

class BookRepository<T extends Book> implements RepositoryInterface<T> {
  save(book: Book): void {
    // Save book in the database
    console.log("GUARDANDO EL LIBRO")
  }
}

const book = new Book("Manuel Entrena", "Los principios solid en typescript")
const repositoryBooks = new BookRepository();
book.changeAuthor = "";
repositoryBooks.save(book);

//#endregion