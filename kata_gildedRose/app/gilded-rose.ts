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

interface ItemService {
  changeQuality: () => void;
  changeSellIn: () => void;
  getItem: () => Item;
}

class ItemDefault implements ItemService {
    private readonly item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    changeQuality(): void {
      if (this.item.quality > 0) {
        this.item.quality--;
      }
    }

    changeSellIn(): void {
      this.item.sellIn--;
    }

    getItem(): Item {
      return this.item;
    }
}

class ItemConjure implements ItemService {
    private readonly item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    changeQuality(): void {
      if (this.item.quality > 0) {
        this.item.quality--;
      }
      if (this.item.quality > 0) {
        this.item.quality--;
      }
    }

    changeSellIn(): void {
      this.item.sellIn--;
    }

    getItem(): Item {
      return this.item;
    }
}

class ItemCheese implements ItemService {
    private readonly item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    changeQuality(): void {
      if (this.item.quality < QUALITYMAX) {
        this.item.quality++;
      }

      if (this.item.quality < QUALITYMAX && this.item.sellIn <= 0) {
        this.item.quality++;
      }
    }

    changeSellIn(): void {
      this.item.sellIn--;
    }

    getItem(): Item {
      return this.item;
    }
}

class ItemTicket implements ItemService {
    private readonly item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    changeQuality(): void {
      if (this.item.sellIn > 0) {
          this.item.quality = Math.min(QUALITYMAX, this.item.quality + this.calculateNewQuality());
      } else {
          this.item.quality = 0;
      }
    }

    calculateNewQuality(): number {
      return this.item.sellIn > 10 ? 1 : this.item.sellIn >= 6 ? 2 : this.item.sellIn > 0 ? 3 : 0;
    }

    changeSellIn(): void {
      this.item.sellIn--;
    }

    getItem(): Item {
      return this.item;
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
          // eslint-disable-next-line no-case-declarations
          const itemCheese = new ItemCheese(this.items[i]);
          itemCheese.changeQuality();
          itemCheese.changeSellIn()
          this.items[i] = itemCheese.getItem();
          break;
        case TICKET:
          // eslint-disable-next-line no-case-declarations
          const itemTicket = new ItemTicket(this.items[i]);
          itemTicket.changeQuality();
          itemTicket.changeSellIn()
          this.items[i] = itemTicket.getItem();
          break;
        case SULFURE:
          break;
        case CONJURE:
          // eslint-disable-next-line no-case-declarations
          const itemConjure = new ItemConjure(this.items[i]);
          itemConjure.changeQuality();
          itemConjure.changeSellIn()
          this.items[i] = itemConjure.getItem();
          break;
        default:
          // eslint-disable-next-line no-case-declarations
          const itemDefault = new ItemDefault(this.items[i]);
          itemDefault.changeQuality();
          itemDefault.changeSellIn()
          this.items[i] = itemDefault.getItem();
          break;
      }
    }

    return this.items;
  }
}







