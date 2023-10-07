export class SellIn {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public decrease(value: number): void {
    this.value -= value
  }
}
