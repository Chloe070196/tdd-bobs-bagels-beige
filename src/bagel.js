const deals = require('../src/deals.js')

const inventory = [
  {
    sku: "BGLO",
    price: "0.49",
    name: "Bagel",
    variant: "Onion",
  },
  {
    sku: "BGLP",
    price: "0.39",
    name: "Bagel",
    variant: "Plain",
  },
  {
    sku: "BGLE",
    price: "0.49",
    name: "Bagel",
    variant: "Everything",
  },
  {
    sku: "BGLS",
    price: "0.49",
    name: "Bagel",
    variant: "Sesame",
  },
  {
    sku: "COF",
    price: "0.99",
    name: "Bagel",
    variant: "",
  },
  {
    sku: "BGSE",
    price: "2.99",
    name: "Bagel Sandwich",
    variant: "Everything",
    fillings: ["Bacon", "Egg", "Cheese"],
  },
  {
    sku: "BGSS",
    price: "4.99",
    name: "Bagel Sandwich",
    variant: "Sesame",
    fillings: ["Cream Cheese", "Smoked Salmon"],
  },
];

function findBySKU(SKU) {
  return inventory.find((bagel) => bagel["sku"] === SKU);
}

class Bagel {
  constructor(SKU, id) {
    this.id = id;
    this.SKU = SKU;
    this.type = findBySKU(SKU).variant;
    this.price = findBySKU(SKU).price;
    this.offer =
      SKU === "COF"
        ? "buy a coffee and plain bagel for 1.25"
        : `${deals[SKU][0]} ${this.type} Bagels for ${deals[SKU][1]}`;
  }

  static getPriceOfBagel(SKU) {
    return findBySKU(SKU).price;
  }

  static getTypeOfBagel(SKU) {
    return findBySKU(SKU).variant;
  }
}

module.exports = Bagel;
