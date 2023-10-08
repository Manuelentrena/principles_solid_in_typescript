import { type Quality } from "./quality";
import { type SellIn } from "./sell-in";

export abstract class Item {
  public static readonly SELL_IN_DECREASE_DEFAULT = 1;
  public static readonly IS_EXPIRED = 0;

  protected sellIn: SellIn;
  protected quality: Quality;

  constructor(sellIn: SellIn, quality: Quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public getSellIn(): number {
    return this.sellIn.getValue();
  }

  public getQuality(): number {
    return this.quality.getValue();
  }

  public decreaseSellIn(): void {
    this.sellIn.decrease(Item.SELL_IN_DECREASE_DEFAULT);
  }

  public isExpired(): boolean {
    return this.sellIn.getValue() < Item.IS_EXPIRED;
  }

  abstract update(): void;
}
