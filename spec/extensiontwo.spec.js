const Basket = require("../src/basket.js");
const Receipt = require("../src/receipt.js");

fdescribe("Receipts", () => {
    let basket
    let receipt

    beforeEach(() => {
        basket = new Basket(40)
    });

    fit("return a blank receipt", () => {
        const testReceipt = new Receipt(basket)
        const expected = ""
        const result = testReceipt.getPurchaseList()
        testReceipt.getReceipt()
        expect(result).toEqual(expected);
    });

    it("returns a receipt with all purchases", () => {
        basket.addBagel('BGLO',2)
        basket.addBagel('BGLP',12)
        basket.addBagel('BGLE',6)
        basket.addBagel('COF',3)
        const testReceipt = new Receipt(basket.countBagelsInBasket())
        const expected = `Onion              2   £0.98\nPlain              12  £3.99\nEverything         6   £2.49\nCoffee             3   £2.97\n`
        const result = testReceipt.getPurchaseList()
        testReceipt.getReceipt()
        expect(result).toEqual(expected);
    });

    it("returns another receipt", () => {
        basket.addBagel('BGLO',4)
        basket.addBagel('BGLP',15)
        basket.addBagel('BGLE',7)
        basket.addBagel('COF',3)
        const testReceipt = new Receipt(basket.countBagelsInBasket())
        const expected = `Onion              4   £1.96\nPlain              15  £5.16\nEverything         7   £2.98\nCoffee             3   £2.97\n`
        const result = testReceipt.getPurchaseList()
        testReceipt.getReceipt()
        expect(result).toEqual(expected);
    });

    it("returns correct total", () => {
        basket.addBagel('BGLO',4)
        basket.addBagel('BGLP',15)
        basket.addBagel('BGLE',7)
        basket.addBagel('COF',3)
        const testReceipt = new Receipt(basket.countBagelsInBasket())
        const expected = basket.getTotal()
        console.log(testReceipt.getReceipt())
        const result = testReceipt.total
        expect(result).toEqual(expected);
    });
})