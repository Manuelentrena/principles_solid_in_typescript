import { type Additions } from "./Additions";
import { type Beverage } from "./Beverage";
import { type Milk } from "./Milk";
import { type Tea } from "./Tea";

export class TeaWithMilk implements Beverage, Additions {
  private readonly _tea: Tea;
  private readonly _milk: Milk

  constructor(tea: Tea, milk: Milk) {
    this._tea = tea;
    this._milk = milk;
  }

  price(): number {
      return this._tea.price() + this._milk.price();
  }
}
