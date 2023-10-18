export abstract class  Beverage {
  private readonly _price: number;

  constructor(price: number) {
    this._price = price;
  }

  price(): number {
    return this._price;
  }
}
