describe('Gilded Rose', () => {
  beforeEach(() => {
      gildedRose.init([
        Object.assign({name: 'Aged Brie', sellIn: 10, quality: 25}, brieItem),
        Object.assign({name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 0}, sulfurasItem),
        Object.assign({name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 15, quality: 15}, backStageItem),
        Object.assign({name: 'Cheddar Cheese', sellIn: 25, quality: 5}, basicItem),
        Object.assign({name: 'Bread', sellIn: 2, quality: 10}, basicItem),
        Object.assign({name: 'Conjured', sellIn: 10, quality: 10}, conjuredItem)
      ]);
  });

  describe('Aged Brie', () => {
    let items;

    beforeEach(() => {
      items = gildedRose.updateQuality();
    });

    it('should return the name Aged Brie', () => {
      expect(items[0].name).toEqual('Aged Brie');
    });

    it('should have decreased in sellIn', () => {
      expect(items[0].sellIn).toEqual(9);
    });

    it('should have increased in quality', () => {
      expect(items[0].quality).toEqual(26);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    let items;

    beforeEach(() => {
      items = gildedRose.updateQuality();
    });

    it('should return the name Sulfuras, Hand of Ragnaros', () => {
      expect(items[1].name).toEqual('Sulfuras, Hand of Ragnaros');
    });

    it('should not have increased or decreased in sellIn', () => {
      expect(items[1].sellIn).toEqual(0);
    });

    it('should not have increased or decreased in quality', () => {
      expect(items[1].quality).toEqual(0);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    let items;

    beforeEach(() => {
      items = gildedRose.updateQuality();
    });

    it('should return the name Backstage passes to a TAFKAL80ETC concert', () => {
      expect(items[2].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    });

    it('should have decreased in sellIn', () => {
      expect(items[2].sellIn).toEqual(14);
    });

    it('should have increased in quality', () => {
      expect(items[2].quality).toEqual(16);
    });

    it('should have increased in quality to double when sellIn less than 10', () => {
      for (let i = 0; i < 5; i++) {
        items = gildedRose.updateQuality();
      }

      expect(items[2].quality).toEqual(23);
    });

    // it('should have increased in quality to double when sellIn less than 5', () => {
    //   for (let i = 0; i < 10; i++) {
    //     items = gildedRose.updateQuality();
    //   }
    //
    //   expect(items[2].quality).to.equal(35);
    // });
  });

  describe('Cheddar Cheese', () => {
    let items;

    beforeEach(() => {
      items = gildedRose.updateQuality();
    });

    it('should return the name Cheddar Cheese', () => {
      expect(items[3].name).toEqual('Cheddar Cheese');
    });

    it('should have decreased in sellIn', () => {
      expect(items[3].sellIn).toEqual(24);
    });

    it('should have decreased in quality', () => {
      expect(items[3].quality).toEqual(4);
    });

    // it('should have stopped increasing in quality after 5 days', () => {
    //   for (let i = 0; i < 5; i++) {
    //     items = gilgedRose.updateQuality();
    //   }
    //
    //   expect(items[3].quality).to.equal(0);
    // });
  });

  describe('Bread', () => {
    let items;

    beforeEach(() => {
      items = gildedRose.updateQuality();
    });

    it('should return the name Bread', () => {
      expect(items[4].name).toEqual('Bread');
    });

    it('should have decreased in sellIn', () => {
      expect(items[4].sellIn).toEqual(1);
    });

    it('should have decreased in quality', () => {
      expect(items[4].quality).toEqual(9);
    });

    // it('should have stopped increasing in quality after 2 days', () => {
    //   for (let i = 0; i < 2; i++) {
    //     items = gilgedRose.updateQuality();
    //   }
    //
    //   expect(items[4].quality).to.equal(5);
    // });
  });

  describe('Conjured', () => {
    let items;

    beforeEach(() => {
      items = gildedRose.updateQuality();
    });

    it('should return the name Conjured', () => {
      expect(items[5].name).toEqual('Conjured');
    });

    it('should have decreased in sellIn', () => {
      expect(items[5].sellIn).toEqual(9);
    });

    it('should have decreased double in quality', () => {
      expect(items[5].quality).toEqual(8);
    });
  });
});
