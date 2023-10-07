export class Quality {
  public static readonly MAX_VALUE = 50;
  public static readonly MIN_VALUE = 0;

  private value: number;

  constructor(value: number) {
    this.value = this.validatedQuality(value);
  }

  public getValue(): number {
    return this.value;
  }

  public decrease(value: number): void {
    this.value -= value;
  }

  public increase(value: number): void {
    this.value += value;
  }

  public resetQuality(): void {
    this.value = Quality.MIN_VALUE;
  }

  private validatedQuality(value: number): number {
    if (value > Quality.MAX_VALUE) {
      return Quality.MAX_VALUE
    }

    if (value < Quality.MIN_VALUE) {
      return Quality.MIN_VALUE
    }

    return value;
  }
}
