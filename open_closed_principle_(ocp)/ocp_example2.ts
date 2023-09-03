//#region BAD EXAMPLE
// enum AnimalType {
//     Cat,
//     Dog,
// }

// class Animal {
//     type: AnimalType;

//     constructor(type: AnimalType) {
//         this.type = type;
//     }
// }

// class AnimalSound {
//     makeSound(animal: Animal) {
//         if (animal.type === AnimalType.Cat) {
//             console.log("Meow");
//         } else if (animal.type === AnimalType.Dog) {
//             console.log("Woof");
//         }
//     }
// }

//#endregion

//#region GOD EXAMPLE
enum AnimalType {
    Cat = "Gato",
    Dog = "Perro",
}

interface Animal {
  getDescription(): void;
  makeSound(): string;
}

class Animal implements Animal {
  private _name: string;
  private _type: AnimalType;
  
  constructor(name: string, type: AnimalType) {
      this._name = name;
      this._type = type; 
  }

  getDescription() {
    return `En animal ${this._name} de tipo ${this._type} hace el sonido ${this.makeSound()}`;
  }

  makeSound() {
    return "Sonido Animal!";
  }
}
class Dog extends Animal{

  constructor(name: string) {
      super(name, AnimalType.Dog);
  }

  makeSound() {
    return "Guao";
  }
}

class Cat extends Animal{

  constructor(name: string) {
      super(name, AnimalType.Cat);
  }
  
  makeSound() {
    return "Miau";
  }
}

const dog = new Dog("Perrito")
console.log(dog.getDescription());
const cat = new Cat("Gatito")
console.log(cat.getDescription());

//#endregion