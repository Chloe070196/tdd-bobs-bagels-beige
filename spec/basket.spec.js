/* eslint-disable no-undef */
const Bagel = require('../src/bagel.js')
const Basket = require('../src/basket.js')

// Would use a few more describe blocks to add clarity to the tests, especially to their messages
const Bagel = require('../src/bagel.js')
const Basket = require('../src/basket.js')

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

    it("basket is empty", () => {
        const expected = []
        const result = basket.contents
        expect(result).toEqual(expected);
    });

    it("get price of bagel before adding to basket", () => {
        const testBagel = new Bagel("BGLO");
        const expected = testBagel.price;
        const result = basket.getPriceOfBagel("BGLO");
        expect(result).toEqual(expected);
      });

    it("add item to basket", () => {

        const expected = [new Bagel("BGLO", 1)]

        const result = basket.addBagel("BGLO")

        expect(result).toEqual(expected);
    });

    it("remove item from basket", () => {

        const expected = []
        basket.addBagel("BGLO")
        const result = basket.removeBagel(1)

        expect(result).toEqual(expected);
    });

    it("add a second bagel to basket", () => {

        const expected = [new Bagel("BGLO", 1),
        new Bagel("BGLO", 2)]
        basket.addBagel("BGLO")
        const result = basket.addBagel("BGLO")
        expect(result).toEqual(expected);
    });

    it("when Basket is full", () => {

        const expected = 'basket is full'
        basket.addBagel("BGLO", 4)
        const result = basket.basketIsFull()
        expect(result).toEqual(expected);
    });
    
    it("prevent adding bagels past basket capacity", () => {
        // shouldn't be able to add 4 bagels to basket of capacity 3.
        const expected = 3
        basket.addBagel("BGLO", 4)
        const result = basket.contents.length
        expect(result).toEqual(expected);
    });

    it("create basket with larger capacity", () => {
        const expected = true
        const largeBasket = new Basket(5)
        const result = largeBasket.capacity > basket.capacity
        expect(result).toEqual(expected);
    });

    it("cannot remove an item that isn't in the basket", () => {
        const expected = "Bagel isn't in basket"
        const result = basket.removeBagel(1)
        expect(result).toEqual(expected);
    });

    it("total sum of bagels in my basket ", () => {
        const expected = 3 * 0.49
        basket.addBagel("BGLO", 3)
        basket.countBagelsInBasket()
        const result = basket.getTotal();
        expect(result).toEqual(expected);
      });
});