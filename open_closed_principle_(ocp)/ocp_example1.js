//#region BAD EXAMPLE
// class Order {
//   id: number;
//   items: string[];
//   shipping: string;
var Item = /** @class */ (function () {
    function Item(id, name, cost) {
        this._id = id;
        this._name = name;
        this._cost = cost;
    }
    Item.prototype.getName = function () {
        return this._name;
    };
    Item.prototype.getCost = function () {
        return this._cost;
    };
    return Item;
}());
var Order = /** @class */ (function () {
    function Order(id, items, shipping) {
        this._id = id;
        this._items = items;
        this._shipping = shipping;
    }
    Order.prototype.getId = function () {
        return this._id;
    };
    Order.prototype.getTotalCostItems = function () {
        return this._items.reduce(function (acc, item) { return acc + item.getCost(); }, 0);
    };
    Order.prototype.getTotalCostOrder = function () {
        return this.getTotalCostItems() + this._shipping.getCosts(this.getTotalCostItems());
    };
    return Order;
}());
var Ground = /** @class */ (function () {
    function Ground() {
    }
    Ground.prototype.getCosts = function (totalCost) {
        return totalCost > 50 ? 0 : 5.95;
    };
    return Ground;
}());
var Air = /** @class */ (function () {
    function Air() {
    }
    Air.prototype.getCosts = function () {
        return 10.95;
    };
    return Air;
}());
var PickUpInStore = /** @class */ (function () {
    function PickUpInStore() {
    }
    PickUpInStore.prototype.getCosts = function () {
        return 0;
    };
    return PickUpInStore;
}());
var item1 = new Item(1, "Item 1", 23);
var item2 = new Item(2, "Item 2", 3);
var item3 = new Item(3, "Item 3", 33);
var ground = new Ground();
var order = new Order(1, [item1, item2], ground);
console.log(order.getTotalCostItems());
console.log(order.getTotalCostOrder());
//#endregion
