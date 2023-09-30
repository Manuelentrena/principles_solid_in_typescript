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
//   private _id: string;
//   private _items: string[];
//   constructor(id: string, items: string[]) {
//     this._id = id;
//     this._items = items;
//   }
//   getId() {
//     return this._id;
//   }
//   getItems() {
//     return this._items;
//   }
// }
// class ConfirmedOrder extends Order {
//   private _isPayed: boolean;
//   constructor(order: Order) {
//     super(order.getId(), order.getItems())
//     this._isPayed = false;
//   }
//   markAsPaid(): void {
//     this._isPayed = true;
//   }
//   isPayed() {
//     return this._isPayed;
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
var Purchase = /** @class */ (function (_super) {
    __extends(Purchase, _super);
    function Purchase(userId, amount, order) {
        var _this = _super.call(this, order.getId(), order.getItems()) || this;
        _this._userId = userId;
        _this._amount = amount;
        return _this;
    }
    Purchase.prototype.getUserId = function () {
        return this._userId;
    };
    Purchase.prototype.getAmount = function () {
        return this._amount;
    };
    Purchase.prototype.getPurchase = function () {
        return {
            userId: this.getUserId(),
            amount: this.getAmount(),
            order: {
                id: this.getId(),
                items: this.getItems()
            }
        };
    };
    return Purchase;
}(Order));
var ConfirmedPurchase = /** @class */ (function (_super) {
    __extends(ConfirmedPurchase, _super);
    function ConfirmedPurchase(purchase) {
        var _this = _super.call(this, purchase.getUserId(), purchase.getAmount(), purchase) || this;
        _this._isPayed = false;
        return _this;
    }
    ConfirmedPurchase.prototype.markAsPaid = function () {
        this._isPayed = true;
    };
    ConfirmedPurchase.prototype.isPayed = function () {
        return this._isPayed;
    };
    return ConfirmedPurchase;
}(Purchase));
var items = ['manzana', 'tomates', 'lechuga'];
var order = new Order(uuid_1.v4(), items);
var purchase = new Purchase(uuid_1.v4(), 1000, order);
console.log(purchase.getPurchase());
var confirmedPurchase = new ConfirmedPurchase(purchase);
confirmedPurchase.markAsPaid();
console.log(confirmedPurchase.isPayed());
//#endregion
