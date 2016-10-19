describe("Gilded Rose", function() {

  describe("Aged Brie", function() {
    it("should be able to change sell_in property", function() {
      items = [ new Item("Aged Brie", 1, 10) ];
      update_quality();
      expect(items[0].sell_in).toEqual(0);
    });
    it("should have a maximum quality of 50", function() {
      items = [ new Item("Aged Brie", 0, 50) ];
      update_quality();
      expect(items[0].quality).toEqual(50);
    });
    it("should increase quality twice as fast when sell_in< 0", function() {
      items = [ new Item("Aged Brie", 0, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(2);
    });
    it("should should increase in quality with decrease in sell_in", function() {
      items = [ new Item("Aged Brie", 1, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(11);
    });
  });

  describe("Sulfuras", function() {
    it("should not be able to change sell_in property", function(){
      items = [ new Item("Sulfuras, Hand of Ragnaros", null, 10) ];
      update_quality();
      expect(items[0].sell_in).toEqual(null);
    });
    it("should not be able to change quality property", function(){
      items = [ new Item("Sulfuras, Hand of Ragnaros", null, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(10);
    });
  });

  describe("Backstage Passes", function() {
    it("should be able to change sell_in property", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10) ];
      update_quality();
      expect(items[0].sell_in).toEqual(10);
    });
    it("should increase quality by 1 in value when sell_in > 10 days", function(){
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(11);
    });
    it("should increase quality by 2 in value when sell_in < 10 days", function(){
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(12);
    });
    it("should increase quality by 3 in value when sell_in < 6 days", function(){
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(13);
    });
    it("should increase quality by 3 when sell_in = 1 day", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(13);
    });
    it("should have zero quality when sell_in < 0 days", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });
    it("should have have minimum quality of 0", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Regular Item", function() {
    it("should be able to change sell_in property", function() {
      items = [ new Item("Regular Item", 1, 10) ];
      update_quality();
      expect(items[0].sell_in).toEqual(0);
    });
    it("should decrease quality only by 1", function() {
      items = [ new Item("Regular Item", 10, 50) ];
      update_quality();
      expect(items[0].quality).toEqual(49);
    });
    it("should decrease quality only by 2 when sell_in < 0", function() {
      items = [ new Item("Regular Item", 0, 50) ];
      update_quality();
      expect(items[0].quality).toEqual(48);
    });
    it("should have a minimum quality of 0", function() {
      items = [ new Item("Regular Item", -1, 1) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Conjured Mana Cake", function() {
    it("should be able to change sell_in property", function() {
      items = [ new Item("Conjured Mana Cake", 1, 10) ];
      update_quality();
      expect(items[0].sell_in).toEqual(0);
    });
    it("should decrease in quality by 2 when sell_in decreases by 1", function() {
      items = [ new Item("Conjured Mana Cake", 1, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(8);
    });
    it("should decrease in quality by 4 when sell_in decreases < 0 ", function() {
      items = [ new Item("Conjured Mana Cake", 0, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(6);
    });
    it("should have a minimum quality of 0", function() {
      items = [ new Item("Conjured Mana Cake", 0, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });
  });

});
