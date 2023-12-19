const { Bagel } = require('../src/bagel.js')
const Basket = require('../src/basket.js')
const deals = require('../src/deals.js')

class Receipt {
  constructor(basketObj) {
    this.originalBasket = basketObj
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

  addItemName(item) {
    return item.sku !== "COF"
      ? item.type
      : 'Coffee'
  }

  setLineLengthTo19(receiptLine) {
    let padding = ""
    for (let i = receiptLine.length; i < 19; i++) {
      padding += ' '
    }
    return padding
  }

  setLineLengthTo23(receiptLine) {
    let padding = ""
    for (let i = receiptLine.length; i < 23; i++) {
      padding += ' '
    }
    return padding
  }

  addItemQuantity(item) {
    return item.quantity
  }

  addItemTotalPrice(item) {
    let sum = '£'
    const deal = deals[item.sku.toLowerCase()]
    console.log(deal)
    const subtotal = this.originalBasket.getSubtotalWithDeals(item, deal)
    sum += subtotal.toFixed(2)
    return sum
  }

  getPurchaseList() {
    this.total = 0
    let purchaseLines = ''
    this.purchases.forEach((item, index) => {
      let receiptLine = ''
      receiptLine += this.addItemName(item)
      receiptLine += this.setLineLengthTo19(receiptLine)
      receiptLine += this.addItemQuantity(item)
      receiptLine += this.setLineLengthTo23(receiptLine)
      receiptLine += this.addItemTotalPrice(item)
      console.log(receiptLine.length)
      purchaseLines += `${receiptLine}\n`
    })
    return purchaseLines
  }
}
module.exports = Receipt
