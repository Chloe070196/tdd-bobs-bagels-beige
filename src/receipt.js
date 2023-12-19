const { Bagel } = require('../src/bagel.js')
const Basket = require('../src/basket.js')

class Receipt {
  constructor(basketObj) {
    this.purchases = basketObj.contents
    this.date = new Date()
    this.total = 0
  }

  // will only work is this.total is added to Basket()
  getReceipt() {
    if (this.purchases.length === 0) return ""

    return `
    ~~~ Bob's Bagels ~~~    

       ${this.date.toDateString()}
----------------------------
${this.getPurchaseList()}
Total                 £${Number(Basket.total.toFixed(2))}
        Thank you
      for your order!         `
  }

  addItemName(receiptLine, sku) {
    receiptLine += Bagel.getTypeOfBagel(sku)
      ? Bagel.getTypeOfBagel(sku)
      : 'Coffee'
  }

  setLineLengthTo19(receiptLine) {
    for (let i = 0; i < 19; i++) {
      if (receiptLine.length < 19) {
        receiptLine += ' '
      }
    }
  }

  setLineLengthTo23(receiptLine) {
    for (let i = 0; i < 4; i++) {
      if (receiptLine.length < 23) {
        receiptLine += ' '
      }
    }
  }

  addItemQuantity(receiptLine, sku) {
    receiptLine += this.purchases[sku]
  }

  addItemTotalPrice(receiptLine, sku) {
    receiptLine += '£'
    const subtotal = Basket.getSubtotal(this.purchases, sku)
    receiptLine += subtotal
  }

  getPurchaseList() {
    this.total = 0
    let purchaseLines = ''
    this.purchases.forEach((item) => {
      const receiptLine = ''
      this.addItemName(receiptLine, item.sku)
      this.setLineLengthTo19(receiptLine)
      this.setLineLengthTo23(receiptLine, item.sku)
      this.addItemQuantity(receiptLine, item.sku)
      this.addItemTotalPrice(receiptLine, item.sku)
      purchaseLines += `${receiptLine}\n`
    })
    return purchaseLines
  }
}
module.exports = Receipt
