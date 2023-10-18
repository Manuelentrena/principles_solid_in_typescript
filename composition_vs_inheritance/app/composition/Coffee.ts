import { type Beverage } from "./Beverage";

export class Coffee implements Beverage {
  private readonly PRICE = 5;

  price(): number {
      return this.PRICE;
  }
}
