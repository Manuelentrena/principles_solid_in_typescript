import { type Beverage } from "./Beverage";

export class HotChocolate implements Beverage {
  private readonly PRICE = 1.45;

  price(): number {
      return this.PRICE;
  }
}
