let item = {
  updateSellIn() {
    this.sellIn = this.sellIn - 1;
  },
};

let basicItem = Object.assign({
  updateQuality(increase = false) {
    this.updateSellIn();

    if (increase) {
      this.quality = this.quality + 1;
    } else {
      if (this.sellIn <= 0) this.quality = this.quality - 2;
      else this.quality = this.quality - 1;
    }

    if (this.quality <= 0) this.quality = 0;
    else if (this.quality > 50) this.quality = 50;
  }
}, item);

let brieItem = Object.assign({
  updateQuality() {
    basicItem.updateQuality.call(this, true);
  }
}, item);

let sulfurasItem = Object.assign({
  updateQuality() {
  }
}, item);

let backStageItem = Object.assign({
  updateQuality() {
    basicItem.updateQuality.call(this, true);

    if (this.sellIn <= 10) this.quality = this.quality + 1;
    if (this.sellIn <= 5) this.quality = this.quality + 1;
    if (this.sellIn <= 0) this.quality = 0;
  }
}, item);

let conjuredItem = Object.assign({
  updateQuality() {
    basicItem.updateQuality.call(this);

    this.quality = this.quality - 1;
  }
}, item);

let gildedRose = {
  init(items = []) {
    this.items = items;
  },
  updateQuality() {
    this.items.map((item) => {
      item.updateQuality();
    });

    return this.items;
  }
};
