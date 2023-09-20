import { IPaymentService } from './PaymentService';
import Card from './Card';

// The Concrete strategy 1
export default class CreditCardPayment implements IPaymentService {
  readonly name: string;

  private readonly owner: Card;

  constructor(owner: Card) {
    this.owner = owner;
    this.name = 'CreditCardPayment';
  }

  isValid(): boolean {
    // TODO Do some code
    return true;
  }

  pay(amount: number): number {
    return this.owner.balance - amount;
  }
}
