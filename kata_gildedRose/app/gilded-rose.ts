const ENTRADA = "Backstage passes to a TAFKAL80ETC concert";
const QUESO = "Aged Brie";
const SULFURO = "Sulfuras, Hand of Ragnaros";
const CONJURO = "Conjured";

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
    let newQuality = 0;
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case QUESO:
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }

          if (this.items[i].quality < 50 && this.items[i].sellIn <= 0) {
            this.items[i].quality = this.items[i].quality + 1
          }

          this.items[i].sellIn = this.items[i].sellIn - 1;
          break;
        case ENTRADA:
          if (this.items[i].sellIn > 10) {
              newQuality = 1;
          } else if (this.items[i].sellIn >= 6) {
              newQuality = 2;
          } else if (this.items[i].sellIn > 0) {
              newQuality = 3;
          } else {
              this.items[i].quality = 0;
          }

          this.items[i].quality = Math.min(50, this.items[i].quality + newQuality);
          this.items[i].sellIn--;
          break;
        case SULFURO:

          break;
        case CONJURO:
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1
          }
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1
          }
          this.items[i].sellIn = this.items[i].sellIn - 1;
          break;
        default:
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1
          }

          this.items[i].sellIn = this.items[i].sellIn - 1;
          break;
      }
    }

    return this.items;
  }
}
