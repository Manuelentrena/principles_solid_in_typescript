//#region BAD EXAMPLE
// enum AnimalType {
//     Cat,
//     Dog,
// }
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
var AnimalType;
(function (AnimalType) {
    AnimalType["Cat"] = "Gato";
    AnimalType["Dog"] = "Perro";
})(AnimalType || (AnimalType = {}));
var Animal = /** @class */ (function () {
    function Animal(name, type) {
        this._name = name;
        this._type = type;
    }
    Animal.prototype.getDescription = function () {
        return "En animal " + this._name + " de tipo " + this._type + " hace el sonido " + this.makeSound();
    };
    Animal.prototype.makeSound = function () {
        return "Sonido Animal!";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name, AnimalType.Dog) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Guao";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name, AnimalType.Cat) || this;
    }
    Cat.prototype.makeSound = function () {
        return "Miau";
    };
    return Cat;
}(Animal));
var dog = new Dog("Perrito");
console.log(dog.getDescription());
var cat = new Cat("Gatito");
console.log(cat.getDescription());
//#endregion
