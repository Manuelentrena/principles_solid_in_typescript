// const TICKET = "Backstage passes to a TAFKAL80ETC concert";
// const CHEESE = "Aged Brie";
// const SULFURE = "Sulfuras, Hand of Ragnaros";
// const CONJURE = "Conjured";
// const QUALITYMAX = 50;

// export class Item {
//   name: string;
//   sellIn: number;
//   quality: number;

//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

// interface ItemService {
//   changeQuality: () => void;
//   changeSellIn: () => void;
//   getItem: () => Item;
// }

// class ItemDefault implements ItemService {
//   public readonly item: Item;

//   constructor(item: Item) {
//     this.item = item;
//   }

//   changeQuality(): void {
//     if (this.item.quality > 0) {
//       this.item.quality--;
//     }
//   }

//   changeSellIn(): void {
//     this.item.sellIn--;
//   }

//   getItem(): Item {
//     return this.item;
//   }
// }

// class ItemSulfure extends ItemDefault {
//     changeQuality(): void {}
//     changeSellIn(): void {}
// }

// class ItemConjure extends ItemDefault {
//     changeQuality(): void {
//       if (this.item.quality > 0) {
//         this.item.quality--;
//       }
//       if (this.item.quality > 0) {
//         this.item.quality--;
//       }
//     }
// }

// class ItemCheese extends ItemDefault {
//     changeQuality(): void {
//       if (this.item.quality < QUALITYMAX) {
//         this.item.quality++;
//       }

//       if (this.item.quality < QUALITYMAX && this.item.sellIn <= 0) {
//         this.item.quality++;
//       }
//     }
// }

// class ItemTicket extends ItemDefault {
//     changeQuality(): void {
//       if (this.item.sellIn > 0) {
//           this.item.quality = Math.min(QUALITYMAX, this.item.quality + this.calculateNewQuality());
//       } else {
//           this.item.quality = 0;
//       }
//     }

//     calculateNewQuality(): number {
//       return this.item.sellIn > 10 ? 1 : this.item.sellIn >= 6 ? 2 : this.item.sellIn > 0 ? 3 : 0;
//     }
// }

// export class GildedRose {
//   items: Item[];

//   constructor(items = [] as Item[]) {
//     this.items = items;
//   }

//   updateQuality(): Item[] {

//     for (let i = 0; i < this.items.length; i++) {
//       const currentItem = this.createItemService(this.items[i]);
//       currentItem.changeQuality();
//       currentItem.changeSellIn();
//       this.items[i] = currentItem.getItem();
//     }

//     return this.items;
//   }

//   createItemService(item: Item): ItemService {
//     switch (item.name) {
//       case CHEESE:
//         return new ItemCheese(item);
//       case TICKET:
//         return new ItemTicket(item);
//       case SULFURE:
//         return new ItemSulfure(item);
//       case CONJURE:
//         return new ItemConjure(item);
//       default:
//         return new ItemDefault(item);
//     }
//   }
// }

import { type Item } from './item';

export class GildedRose {
  private readonly items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  public getItems(): Item[] {
    return this.items;
  }

  public updateQuality(): void {
    this.items.forEach((item) => { item.update() });
  }
}







