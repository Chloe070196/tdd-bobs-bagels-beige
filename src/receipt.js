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
    if (!this.purchases) return ""

    return `
    ~~~ Bob's Bagels ~~~    

       ${this.date.toDateString()}
----------------------------
${this.getPurchaseList()}
Total                 £${Number(this.total.toFixed(2))}
        Thank you
      for your order!         `
  }

  addItemName(receiptLine, item) {
    receiptLine += item.sku !== "COF"
      ? item.type
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

  addItemTotalPrice(receiptLine, item) {
    receiptLine += '£'
    const subtotal = item.getSubtotal()
    receiptLine += subtotal
  }

  getPurchaseList() {
    this.total = 0
    let purchaseLines = ''
    this.purchases.forEach((item) => {
      const receiptLine = ''
      this.addItemName(receiptLine, item)
      this.setLineLengthTo19(receiptLine)
      this.setLineLengthTo23(receiptLine)
      this.addItemQuantity(receiptLine, item)
      this.addItemTotalPrice(receiptLine, item)
      purchaseLines += `${receiptLine}\n`
    })
    return purchaseLines
  }
}
module.exports = Receipt
