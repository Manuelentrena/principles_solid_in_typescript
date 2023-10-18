import { type Additions } from "./Additions";
import { type Beverage } from "./Beverage";
import { type Cream } from "./Cream";
import { type HotChocolate } from "./HotChocolate";

export class HotChocolateWithCream implements Beverage, Additions {
  private readonly _hotChocolate: HotChocolate;
  private readonly _cream: Cream

  constructor(hotChocolate: HotChocolate, cream: Cream) {
    this._hotChocolate = hotChocolate;
    this._cream = cream;
  }

  price(): number {
      return this._hotChocolate.price() + this._cream.price();
  }
}
