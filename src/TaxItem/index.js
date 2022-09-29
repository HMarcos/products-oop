import Item from '../Item';

export default class TaxItem extends Item {
  constructor(category, description, price) {
    super(category, description, price);
  }

  calculateTax(taxRate) {
    return this.price * taxRate;
  }
}
