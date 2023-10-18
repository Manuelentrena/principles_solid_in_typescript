import { type Additions } from "./Additions";
import { type Beverage } from "./Beverage";
import { type Coffee } from "./Coffee";
import { type Milk } from "./Milk";

export class CoffeeWithMilk implements Beverage, Additions {
  private readonly _coffee: Coffee;
  private readonly _milk: Milk

  constructor(coffee: Coffee, milk: Milk) {
    this._coffee = coffee;
    this._milk = milk;
  }

  price(): number {
      return this._coffee.price() + this._milk.price();
  }
}
