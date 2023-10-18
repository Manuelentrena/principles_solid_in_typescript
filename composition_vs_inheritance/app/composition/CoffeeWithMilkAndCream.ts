import { type Additions } from "./Additions";
import { type Beverage } from "./Beverage";
import { type Coffee } from "./Coffee";
import { type Cream } from "./Cream";
import { type Milk } from "./Milk";

export class CoffeeWithMilkAndCream implements Beverage, Additions {
  private readonly _coffee: Coffee;
  private readonly _milk: Milk
  private readonly _cream: Cream

  constructor(coffee: Coffee, milk: Milk, cream: Cream) {
    this._coffee = coffee;
    this._milk = milk;
    this._cream = cream;
  }

  price(): number {
      return this._coffee.price() + this._milk.price() + this._cream.price();
  }
}
