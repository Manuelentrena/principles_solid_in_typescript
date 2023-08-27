
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
  private _author: string;
  private _title: string;
  constructor(author: string, title: string) {
    this._author = author;
    this._title = title;
  }

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

class Aventure extends Book{
  private _history = "";

  constructor(author: string,title: string, history: string) {
    super(author, title);
    this._history = history;
  }

  public get history(): string {
    return this._history;
  }

}

interface RepositoryInterface<T> {
  resume(entity: T): void;
}

class BookRepository<T extends Book> implements RepositoryInterface<T> {
  resume(book: T): void {
      if (book instanceof Aventure) {
      console.log(`El libro de ${book.author} con título ${book.title} trata de ${book.history}`);
    } else {
      console.log(`El libro de ${book.author} con título ${book.title} no tiene historia.`);
    }
  }
}

const aventure = new Aventure("Manuel Entrena", "historia de la programación", "La historia de como me converti en programador")
const book = new Book("J.R. Tolkien", "The Lord of the Ring")
const repositoryBooks = new BookRepository();
repositoryBooks.resume(aventure);
repositoryBooks.resume(book);

//#endregion