//#region BAD EXAMPLE
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Straight = /** @class */ (function () {
    function Straight(length) {
        this.length = length;
    }
    Straight.prototype.perimeter = function () {
        return this.length;
    };
    return Straight;
}());
var circle = new Circle(3);
console.log(circle.area());
console.log(circle.perimeter());
var rectangle = new Rectangle(3, 4);
console.log(rectangle.area());
console.log(rectangle.perimeter());
var straight = new Straight(5);
console.log(straight.perimeter());
//#endregion
