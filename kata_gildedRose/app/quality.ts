export class Quality {
  public static readonly MAX_VALUE_SULFURA = 80;
  public static readonly MAX_VALUE = 50;
  public static readonly MIN_VALUE = 0;

  private value: number;
  private readonly isSulfura: boolean;

  constructor(value: number, isSulfura: boolean = false) {
    this.value = !isSulfura ? this.validatedQuality(value) : Quality.MAX_VALUE_SULFURA;
    this.isSulfura = isSulfura;
  }

  public getValue(): number {
    return this.value;
  }

  public decrease(value: number): void {
    if (!this.isSulfura) {
      this.value = this.validatedQuality(this.value - value);
    }
  }

  public increase(value: number): void {
    if (!this.isSulfura) {
      this.value = this.validatedQuality(this.value + value);
    }
  }

  public resetQuality(): void {
    if (!this.isSulfura) {
      this.value = Quality.MIN_VALUE;
    }
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
