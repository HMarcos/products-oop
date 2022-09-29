import TaxItem from '../TaxItem';

export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    const total = this.items.reduce(
      (sum, currentItem) => sum + currentItem.price,
      0
    );
    return total;
  }

  getTaxes() {
    const totalTaxes = this.items.reduce(
      (sum, currentItem) =>
        sum + (currentItem instanceof TaxItem ? currentItem.calculateTax() : 0),
      0
    );
    return totalTaxes;
  }
}
