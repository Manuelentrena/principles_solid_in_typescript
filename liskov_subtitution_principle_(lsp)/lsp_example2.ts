//#region BAD EXAMPLE

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
import { v4 as uuidv4 } from 'uuid';

class Order {
  private _id: string;
  private _items: string[];

  constructor(id: string, items: string[]) {
    this._id = id;
    this._items = items;
  }

  getId() {
    return this._id;
  }

  getItems() {
    return this._items;
  }

}

class ConfirmedOrder extends Order {
  private _isPayed: boolean;
  
  constructor(order: Order) {
    super(order.getId(), order.getItems())
    this._isPayed = false;
  }
  
  markAsPaid(): void {
    this._isPayed = true;
  }

  isPayed() {
    return this._isPayed;
  }
}

const items = ['manzana', 'tomates', 'lechuga'];
const order = new Order( uuidv4(), items);
const liquidateOrder = new ConfirmedOrder(order);
liquidateOrder.markAsPaid();
console.log(liquidateOrder.getItems())
console.log(liquidateOrder.isPayed())
console.log(liquidateOrder.getId())

//#endregion