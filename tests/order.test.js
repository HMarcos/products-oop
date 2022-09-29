import Item from './../src/Item';
import Order from './../src/Order';
import TaxItem from './../src/TaxItem';
import Water from './../src/Water';
import Beer from './../src/Beer';
import Cigar from './../src/Cigar';
import Electronics from '../src/Electronics';

test('Deve criar um pedido e calcular o total', () => {
  const order = new Order();
  order.addItem(new Beer('Beer', 'Brahma', 6));
  order.addItem(new Cigar('Cigar', 'Malboro', 10));
  order.addItem(new Electronics('Eletronics', 'IPhone 13', 13000));
  order.addItem(new Water('Water', 'Crystal', 1));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test('Deve criar um pedido e calcular os impostos', () => {
  const order = new Order();
  order.addItem(new Beer('Beer', 'Brahma', 6));
  order.addItem(new Cigar('Cigar', 'Malboro', 10));
  order.addItem(new Electronics('Eletronics', 'IPhone 13', 13000));
  order.addItem(new Water('Water', 'Crystal', 1));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});
