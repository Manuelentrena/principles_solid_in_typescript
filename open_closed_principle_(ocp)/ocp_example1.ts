//#region BAD EXAMPLE
// class Order {
//   id: number;
//   items: string[];
//   shipping: string;

//   getTotalCost(): number {
//     return 0;
//   }

//   getShippingCosts(): number {
//     const totalCost = this.getTotalCost();

//     if (this.shipping === "ground") {
//       return totalCost > 50 ? 0 : 5.95;
//     }

//     if (this.shipping === "air") {
//       return 10.95;
//     }

//     return 0;
//   }
// }
//#endregion

//#region GOOD EXAMPLE

interface Item {
  getName(): void;
  getCost(): void;
}

class Item implements Item{
  private _id: number;
  private _name: string;
  private _cost: number;
  
  constructor(id: number, name: string, cost: number) {
    this._id = id;
    this._name = name;
    this._cost = cost;
  }

  getName() {
    return this._name;
  }

  getCost() {
    return this._cost;
  }
}

interface OrderInterface {
  getId(): number;
  getTotalCostItems(): number;
  getTotalCostOrder(): number;
}


class Order implements OrderInterface{
  private _id: number;
  private _items: Item[];
  private _shipping: Shipping;

  constructor(id: number, items: Item[], shipping: Shipping) {
    this._id = id;
    this._items = items;
    this._shipping = shipping;
  }

  getId(): number {
    return this._id;
  }

  getTotalCostItems(): number {
    return this._items.reduce((acc, item) => acc + item.getCost(), 0);
  }

  getTotalCostOrder(): number {
    return this.getTotalCostItems() + this._shipping.getCosts(this.getTotalCostItems())
  }
}

interface Shipping {
  getCosts(totalCost: number): number;
}

class Ground implements Shipping {
  getCosts(totalCost: number): number {
    return totalCost > 50 ? 0 : 5.95;
  }
}

class Air implements Shipping {
  getCosts(): number {
    return 10.95;
  }
}

class PickUpInStore implements Shipping {
  getCosts(): number {
    return 0;
  }
}

const item1 = new Item(1, "Item 1", 23);
const item2 = new Item(2, "Item 2", 3);
const item3 = new Item(3, "Item 3", 33);

const ground = new Ground();

const order = new Order(1, [item1, item2], ground);

console.log(order.getTotalCostItems());
console.log(order.getTotalCostOrder());

//#endregion