import { Item } from "./item";

export class StandardItem extends Item {
  update(): void {
    this.decreaseSellIn();
    this.isExpired()
      ? this.quality.decrease(StandardItem.SELL_IN_DECREASE_DEFAULT * 2)
      : this.quality.decrease(StandardItem.SELL_IN_DECREASE_DEFAULT);
  }
}
