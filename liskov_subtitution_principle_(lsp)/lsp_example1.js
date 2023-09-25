//#region GOOD EXAMPLE
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
var Rectangle = /** @class */ (function () {
    function Rectangle(high, wide) {
        this._high = high;
        this._wide = wide;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this._high * this._wide;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "diagonal", {
        get: function () {
            return Math.sqrt(Math.pow(this._high, 2) + Math.pow(this._wide, 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "high", {
        get: function () {
            return this._high;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "wide", {
        get: function () {
            return this._wide;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = _super.call(this, length, length) || this;
        _this._length = length;
        return _this;
    }
    return Square;
}(Rectangle));
var square = new Square(5);
console.log(square.area);
console.log(square.diagonal);
var rectangle = new Rectangle(3, 4);
console.log(rectangle.area);
console.log(rectangle.diagonal);
//#endregion
