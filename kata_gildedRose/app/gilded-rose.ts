const TICKET = "Backstage passes to a TAFKAL80ETC concert";
const CHEESE = "Aged Brie";
const SULFURE = "Sulfuras, Hand of Ragnaros";
const CONJURE = "Conjured";
const QUALITYMAX = 50;

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Item[];

  constructor(items = [] as Item[]) {
    this.items = items;
  }

  updateQuality(): Item[] {

    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case CHEESE:
          this.items[i] = this.changeQualityCheese({ ...this.items[i] });
          break;
        case TICKET:
          this.items[i] = this.changeQualityTicket({ ...this.items[i] });
          break;
        case SULFURE:
          break;
        case CONJURE:
          this.items[i] = this.changeQualityConjure({ ...this.items[i] })
          break;
        default:
          this.items[i] = this.changeQualityDefault({ ...this.items[i] })
          break;
      }
    }

    return this.items;
  }

  changeQualityDefault(item: Item): Item {
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;
    return item;
  }

  changeQualityConjure(item: Item): Item {
    if (item.quality > 0) {
      item.quality--;
    }
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;
    return item;
  }

  changeQualityCheese(item: Item): Item {
    if (item.quality < QUALITYMAX) {
      item.quality++;
    }

    if (item.quality < QUALITYMAX && item.sellIn <= 0) {
      item.quality++;
    }

    item.sellIn--;
    return item;
  }

  changeQualityTicket(item: Item): Item {
    if (item.sellIn > 0) {
        item.quality = Math.min(QUALITYMAX, item.quality + this.calculateNewQuality(item.sellIn));
    } else {
        item.quality = 0;
    }
    item.sellIn--;
    return item;
  }

  calculateNewQuality(sellIn: number): number {
    return sellIn > 10 ? 1 : sellIn >= 6 ? 2 : sellIn > 0 ? 3 : 0;
  }





}
