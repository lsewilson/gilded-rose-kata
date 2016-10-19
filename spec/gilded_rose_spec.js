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

});
