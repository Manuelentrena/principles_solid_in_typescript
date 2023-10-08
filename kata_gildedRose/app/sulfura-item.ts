import { Item } from './item';
import { Quality } from './quality';
import { SellIn } from './sell-in';

export class SulfurasItem extends Item {
  constructor() {
    super(new SellIn(SellIn.INFINITE_VALUE), new Quality(Quality.MAX_VALUE_SULFURA, true));
  }

  update(): void {}
}
