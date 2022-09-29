import TaxItem from '../TaxItem';

export default class Electronics extends TaxItem {
  constructor(description, price) {
    super("Electronics", description, price);
  }

  getTax() {
    return 0.3;
  }
}
