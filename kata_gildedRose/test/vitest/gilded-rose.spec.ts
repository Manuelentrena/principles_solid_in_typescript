
import { AgedBrieItem } from "@/aged-brie-item";
import { BackStagePassItem } from "@/back-stage-pass-item";
import { ConjuredItem } from "@/conjured-item";
import { GildedRose } from "@/gilded-rose";
import { Quality } from "@/quality";
import { SellIn } from "@/sell-in";
import { StandardItem } from "@/standard-item";
import { SulfurasItem } from "@/sulfura-item";

describe('GildedRose', () => {
  let gildedRose: GildedRose;

  beforeEach(() => {
    gildedRose = new GildedRose([]);
  });

  describe('when update the quality of the items', () => {
    describe('and is a standardItem', () => {
      describe('and the sell date has not expired', () => {
        it('should decrease both "sellIn" and "qualily" values in one', () => {
          function getStandardItemNotExpired(): StandardItem {
            const sellIn = new SellIn(5);
            const quality = new Quality(10);
            return new StandardItem(sellIn, quality);
          }
          gildedRose = new GildedRose([getStandardItemNotExpired()]);
          const expectedSellIn = gildedRose.getItems()[0].getSellIn() - 1;
          const expectedQuality = gildedRose.getItems()[0].getQuality() - 1;
          gildedRose.updateQuality();
          expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
          expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        });
      });

      describe('and the sell date has expired', () => {
        it('should decrease the qualily twice as fast', () => {
          function getStandardItemExpired(): StandardItem {
            const sellIn = new SellIn(0);
            const quality = new Quality(10);
            return new StandardItem(sellIn, quality);
          }
          gildedRose = new GildedRose([getStandardItemExpired()]);
          const expectedQuality = gildedRose.getItems()[0].getQuality() - 2;
          gildedRose.updateQuality();
          expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        });
      });
    });
    describe('and is a SufurasItem', () => {
      it('should not modify any after being updated', () => {
        const sulfurasItem = new SulfurasItem();
        gildedRose = new GildedRose([sulfurasItem]);
        gildedRose.updateQuality();
        expect(gildedRose.getItems()[0].getSellIn()).toBe(SellIn.INFINITE_VALUE);
        expect(gildedRose.getItems()[0].getQuality()).toBe(Quality.MAX_VALUE_SULFURA);
      });
    });
    describe('and is a ConjuredItem', () => {
      describe('and the sell date has not expired', () => {
        it('should decrease both "sellIn" and "qualily" values in two', () => {
          const conjuredItem = new ConjuredItem(new SellIn(10), new Quality(20));
          gildedRose = new GildedRose([conjuredItem]);
          const expectedSellIn = conjuredItem.getSellIn() - 1;
          const expectedQuality = conjuredItem.getQuality() - 2;
          gildedRose.updateQuality();
          expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
          expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        });

        describe('and the sell date has expired', () => {
          it('should decrease the qualily twice as fast', () => {
            const expiredConjuredItem = new ConjuredItem(new SellIn(-1),new Quality(20));
            gildedRose = new GildedRose([expiredConjuredItem]);
            const expectedSellIn = expiredConjuredItem.getSellIn() - 1;
            const expectedQuality = expiredConjuredItem.getQuality() - 4;
            gildedRose.updateQuality();
            expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
            expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
          });
        });
      });
    });
    describe('and is an AgedBrieItem', () => {
      it('should increase the qualily value and decrease de sellIn value', () => {
        const agedBrieItem = new AgedBrieItem(new SellIn(0), new Quality(20));
        gildedRose = new GildedRose([agedBrieItem]);
        const expectedQuality = agedBrieItem.getQuality() + 2;
        const expectedSellIn = agedBrieItem.getSellIn() - 1;
        gildedRose.updateQuality();
        expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
      });
    });
    describe('and is a BackStagePasses', () => {
      describe('and the sell date has not expired', () => {
        it('should increase qualily in one if sellIn is greater than 10 days', () => {
          const backStagePass = new BackStagePassItem(new SellIn(20), new Quality(15));
          const expectedSellIn = backStagePass.getSellIn() - 1;
          const expectedQuality = backStagePass.getQuality() + 1;
          gildedRose = new GildedRose([backStagePass]);
          gildedRose.updateQuality();
          expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
          expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        });

        it('should increase qualily in two if sellIn is between 10 and 6 days ', () => {
          const backStagePass = new BackStagePassItem(new SellIn(9), new Quality(15));
          const expectedSellIn = backStagePass.getSellIn() - 1;
          const expectedQuality = backStagePass.getQuality() + 2;
          gildedRose = new GildedRose([backStagePass]);
          gildedRose.updateQuality();
          expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
          expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        });

        it('should increase qualily in 3 if sellIn is between 5 and 1 days ', () => {
          const backStagePass = new BackStagePassItem(new SellIn(4), new Quality(15));
          const expectedSellIn = backStagePass.getSellIn() - 1;
          const expectedQuality = backStagePass.getQuality() + 3;
          gildedRose = new GildedRose([backStagePass]);
          gildedRose.updateQuality();
          expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
          expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        });

        it('should drops to 0 qualily value if the sell date has expired ', () => {
          const backStagePass = new BackStagePassItem(new SellIn(0), new Quality(15));
          const expectedSellIn = backStagePass.getSellIn() - 1;
          const expectedQuality = 0;
          gildedRose = new GildedRose([backStagePass]);
          gildedRose.updateQuality();
          expect(gildedRose.getItems()[0].getSellIn()).toBe(expectedSellIn);
          expect(gildedRose.getItems()[0].getQuality()).toBe(expectedQuality);
        });
      });
    });
  });




});

/* OLD VERSION WHITOUT MODIFY CLASS ITEM */

// describe('Gilded Rose', () => {
//   it('item foo', () => {
//     const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(-1);
//     expect(items[0].quality).toBe(0);
//   });
//   it('item Sulfuras, Hand of Ragnaros', () => {
//     const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);
//     const items = gildedRose.updateQuality();
//     gildedRose.updateQuality();
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(-1);
//     expect(items[0].quality).toBe(80);
//   });
//   it('item Aged Brie', () => {
//     const gildedRose = new GildedRose([new Item('Aged Brie', 1, 40)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(0);
//     expect(items[0].quality).toBe(41);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(-1);
//     expect(items[0].quality).toBe(43);
//   });
//   it('item Backstage passes to a TAFKAL80ETC concert', () => {
//     const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 34)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(5);
//     expect(items[0].quality).toBe(36);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(4);
//     expect(items[0].quality).toBe(39);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(3);
//     expect(items[0].quality).toBe(42);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(2);
//     expect(items[0].quality).toBe(45);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(1);
//     expect(items[0].quality).toBe(48);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(0);
//     expect(items[0].quality).toBe(50);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(-1);
//     expect(items[0].quality).toBe(0);
//   });
//   it('item Conjured', () => {
//     const gildedRose = new GildedRose([new Item('Conjured', 3, 5)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(2);
//     expect(items[0].quality).toBe(3);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(1);
//     expect(items[0].quality).toBe(1);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(0);
//     expect(items[0].quality).toBe(0);
//     gildedRose.updateQuality();
//     expect(items[0].sellIn).toBe(-1);
//     expect(items[0].quality).toBe(0);
//   });
// });
