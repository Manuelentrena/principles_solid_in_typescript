import { Item } from './item';

export class BackStagePassItem extends Item {
  protected static readonly LAST_DAYS_CONCERT = 5;
  protected static readonly VALUE_LAST_DAYS_CONCERT = 3;

  protected static readonly PENUNTIMATE_DAYS_CONCERT = 10;
  protected static readonly VALUE_PENUNTIMATE_DAYS_CONCERT = 2;

  protected static readonly STANDAR_VALUE = 1;

  update(): void {
    this.decreaseSellIn();
    if (this.sellIn.getValue() <= BackStagePassItem.IS_EXPIRED) {
      this.quality.resetQuality();
      return;
    }
    if (this.sellIn.getValue() < BackStagePassItem.LAST_DAYS_CONCERT) {
      this.quality.increase(BackStagePassItem.VALUE_LAST_DAYS_CONCERT);
      return;
    }
    if (this.sellIn.getValue() < BackStagePassItem.PENUNTIMATE_DAYS_CONCERT) {
      this.quality.increase(BackStagePassItem.VALUE_PENUNTIMATE_DAYS_CONCERT);
      return;
    }
    if (this.sellIn.getValue() >= BackStagePassItem.PENUNTIMATE_DAYS_CONCERT) {
      this.quality.increase(BackStagePassItem.STANDAR_VALUE);
    }
  }
}
