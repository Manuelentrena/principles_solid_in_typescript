import { Item } from './item';

export class AgedBrieItem extends Item {

  update(): void {
    this.decreaseSellIn();
    this.isExpired()
      ? this.quality.increase(2)
      : this.quality.increase(1);
  }
}
