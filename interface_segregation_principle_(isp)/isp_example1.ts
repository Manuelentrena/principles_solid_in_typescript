//#region BAD EXAMPLE

// interface Shape {
//     area(): number;
//     perimeter(): number;
// }
// class Rectangle implements Shape {
//     constructor(private width: number, private height: number) {}
//     area(): number {
//         return this.width * this.height;
//     }
//     perimeter(): number {
//         return 2 * (this.width + this.height);
//     }
// }
// class Circle implements Shape {
//     constructor(private radius: number) {}
//     area(): number {
//         return Math.PI * this.radius * this.radius;
//     }
//     perimeter(): number {
//         return 2 * Math.PI * this.radius;
//     }
// }
// class SquareAreaCalculator {
//     calculate(square: Shape): number {
//         return square.area();
//     }
// }

// const circle = new Circle(3);
// console.log(circle.area());
// console.log(circle.perimeter());

// const rectangle = new Rectangle(3, 4);
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

// const areaSquare = new SquareAreaCalculator();
// console.log(areaSquare.calculate(rectangle));


//#endregion

//#region GOD EXAMPLE
interface Area {
    area(): number;
}
interface Perimeter {
    perimeter(): number;
}
class Rectangle implements Area, Perimeter {
    constructor(private width: number, private height: number) {}
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}
class Circle implements Area, Perimeter {
    constructor(private radius: number) {}
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Straight implements Perimeter {
    constructor(private length: number) {}
    perimeter(): number {
        return this.length;
    }
}

const circle = new Circle(3);
console.log(circle.area());
console.log(circle.perimeter());

const rectangle = new Rectangle(3, 4);
console.log(rectangle.area());
console.log(rectangle.perimeter());

const straight = new Straight(5);
console.log(straight.perimeter());
//#endregion