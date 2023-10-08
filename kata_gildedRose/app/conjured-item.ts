import { Item } from "./item";

export class ConjuredItem extends Item {
  protected static readonly QUALITY_DECREASE_VALUE = 2;
  update(): void {
    this.decreaseSellIn();
    this.isExpired()
      ? this.quality.decrease(ConjuredItem.QUALITY_DECREASE_VALUE * 2)
      : this.quality.decrease(ConjuredItem.QUALITY_DECREASE_VALUE);
  }
}
