function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

function update() {
  for (var i = 0; i < items.length; i++) {
    _update_quality(items[i]);
    _update_sell_in(items[i]);
    if (items[i].sell_in < 0) {
      _update_quality(items[i]);
    }
  }
}

function _update_sell_in(item) {
  if (item.name != "Sulfuras, Hand of Ragnaros") {item.sell_in--;}
}

function _update_quality(item) {
  if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
    _update_backstage_pass_quality(item);
  } else if (item.name == "Sulfuras, Hand of Ragnaros") {
    _update_sulfuras_quality(item);
  } else if (item.name == "Aged Brie") {
    _update_brie_quality(item);
  } else if (item.name == "Conjured Mana Cake") {
    _update_conjured_quality(item);
  } else {
    _update_regular_quality(item);
  }
}

function _update_sulfuras_quality() {}

function _update_brie_quality(item) {
  if (item.quality < 50) {
    item.quality++;
  }
}

function _update_backstage_pass_quality(item) {
  if (item.sell_in > 10) {
    item.quality++;
  } else if (item.sell_in > 5) {
    item.quality += 2;
  } else if (item.sell_in >= 0) {
    item.quality += 3;
  } else {
    item.quality = 0;
  }
}

function _update_regular_quality(item) {
  if (item.quality > 0) {
    item.quality--;
  }
}

function _update_conjured_quality(item) {
  if (item.quality > 0) {
    item.quality -= 2;
  }
}
