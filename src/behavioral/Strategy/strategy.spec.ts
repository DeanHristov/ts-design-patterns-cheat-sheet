import { describe, it } from '@jest/globals';
import Card from './Card';
import PaymentService from './PaymentService';
import CreditCardPayment from './CreditCardPayment';
import PayPalUser from './User';
import PayPalPayment from './PayPalPayment';

describe('Behaviours -> Strategy design pattern', () => {
  it('Should be able to process an order with a PayPal user', () => {
    const payPalUser: PayPalUser = new PayPalUser('John', '1234', 1000);
    const strategy: PaymentService = new PaymentService(
      new PayPalPayment(payPalUser),
    );

    expect(strategy.processOrder(10)).toEqual(
      `The order has been processed with PayPalPayment`,
    );
  });

  it('Should be able to process an order with a Credit Card', () => {
    const creditCard: Card = new Card('374245455400126', 'John', 123, 1000);
    const strategy: PaymentService = new PaymentService(
      new CreditCardPayment(creditCard),
    );

    expect(strategy.processOrder(20)).toEqual(
      `The order has been processed with CreditCardPayment`,
    );
  });

  it('Should be able to swap the strategy at run-time', () => {
    // Processing the order via Credit card
    const payPalUser: PayPalUser = new PayPalUser('John', '1234', 1000);
    const creditCard: Card = new Card('374245455400136', 'John 1', 123, 1000);
    const strategy: PaymentService = new PaymentService(
      new CreditCardPayment(creditCard),
    );

    strategy.setStrategy(new PayPalPayment(payPalUser));

    strategy.processOrder(20);

    expect(strategy.processOrder(10)).toEqual(
      `The order has been processed with PayPalPayment`,
    );
  });
});
