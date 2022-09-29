import Item from '../Item';

export default class Order {
  constructor() {
    this.items = [];
    this.taxes = {
      Beer: 0.2,
      Cigar: 0.25,
      Eletronics: 0.3,
      Water: 0,
    };
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
        sum + currentItem.calculateTax(this.taxes[currentItem.category]),
      0
    );
    return totalTaxes;
  }
}
