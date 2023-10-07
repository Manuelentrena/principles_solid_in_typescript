import { type Quality } from "./quality";
import { type SellIn } from "./sell-in";

export abstract class Item {
  protected sellIn: SellIn;
  protected quality: Quality;
  public static readonly SELL_IN_DECREASE_DEFAULT = 1;

  constructor(sellIn: SellIn, quality: Quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  protected getSellIn(): number {
    return this.sellIn.getValue();
  }

  protected getQuality(): number {
    return this.quality.getValue();
  }

  protected decreaseSellIn(): void {
    this.sellIn.decrease(Item.SELL_IN_DECREASE_DEFAULT);
  }

  protected isExpired(): boolean {
    return this.sellIn.getValue() < 0;
  }
}
