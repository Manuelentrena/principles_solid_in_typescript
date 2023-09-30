//#region BAD EXAMPLE

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
import { v4 as uuidv4 } from 'uuid';

class Order implements Order{
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

interface Order {
  getId(): string;
  getItems(): string[];
}

class Purchase extends Order {
  private _userId: string;
  private _amount: number;

  constructor(userId: string, amount: number, order: Order) {
    super(order.getId(), order.getItems())
    this._userId = userId;
    this._amount = amount;
  }

  getUserId() {
    return this._userId;
  }

  getAmount() {
    return this._amount;
  }

  getPurchase() {
    return {
      userId: this.getUserId(),
      amount: this.getAmount(),
      order: {
        id: this.getId(),
        items: this.getItems(),
      }
    };
  }
  
}

interface Purchase {
  getUserId(): string;
  getAmount(): number;
  getPurchase(): {
    userId: string;
    amount: number;
    order: {
      id: string;
      items: string[];
    };
  };
}

class ConfirmedPurchase extends Purchase{
  private _isPayed: boolean;
  
  constructor(purchase: Purchase) {
    super(purchase.getUserId(), purchase.getAmount(), purchase)
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
const order = new Order( uuidv4(), items );
const purchase = new Purchase(uuidv4(), 1000, order);
console.log(purchase.getPurchase())
const confirmedPurchase = new ConfirmedPurchase(purchase);
confirmedPurchase.markAsPaid();
console.log(confirmedPurchase.isPayed())

//#endregion