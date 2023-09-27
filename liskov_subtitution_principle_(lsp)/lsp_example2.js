"use strict";
//#region BAD EXAMPLE
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
exports.__esModule = true;
// class Order {
//   _id: number;
//   _items: string[];
//   _isPayed: boolean;
//   constructor(id: number, items: string[]) {
//     this._id = id;
//     this._items = items;
//     this._isPayed = false;
//   }
//   markAsPaid(): void {
//     this._isPayed = true;
//   }
// }
// class DraftOrder extends Order {
//   markAsPaid(): void {
//     throw new Error("Draft orders can't be payed");
//   }
// }
//#endregion
//#region GOD EXAMPLE
var uuid_1 = require("uuid");
var Order = /** @class */ (function () {
    function Order(id, items) {
        this._id = id;
        this._items = items;
    }
    Order.prototype.getId = function () {
        return this._id;
    };
    Order.prototype.getItems = function () {
        return this._items;
    };
    return Order;
}());
var ConfirmedOrder = /** @class */ (function (_super) {
    __extends(ConfirmedOrder, _super);
    function ConfirmedOrder(order) {
        var _this = _super.call(this, order.getId(), order.getItems()) || this;
        _this._isPayed = false;
        return _this;
    }
    ConfirmedOrder.prototype.markAsPaid = function () {
        this._isPayed = true;
    };
    ConfirmedOrder.prototype.isPayed = function () {
        return this._isPayed;
    };
    return ConfirmedOrder;
}(Order));
var items = ['manzana', 'tomates', 'lechuga'];
var order = new Order(uuid_1.v4(), items);
var liquidateOrder = new ConfirmedOrder(order);
liquidateOrder.markAsPaid();
console.log(liquidateOrder.getItems());
console.log(liquidateOrder.isPayed());
console.log(liquidateOrder.getId());
//#endregion
