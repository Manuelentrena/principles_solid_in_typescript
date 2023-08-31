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
class Order {
  id: number;
  items: string[];
  shipping: Shipping;

  // constructor

  getTotalCost(): number {
    return 0;
  }
}

interface Shipping {
  getShippingCosts(totalCost: number): number;
}

class Ground implements Shipping {
  getShippingCosts(totalCost: number): number {
    return totalCost > 50 ? 0 : 5.95;
  }
}

class Air implements Shipping {
  getShippingCosts(): number {
    return 10.95;
  }
}

class PickUpInStore implements Shipping {
  getShippingCosts(): number {
    return 0;
  }
}

//#endregion