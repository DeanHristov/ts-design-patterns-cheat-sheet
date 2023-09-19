import { IPaymentService } from "./PaymentService";
import PayPalUser from "./User";

// The Concrete strategy 2
export default class PayPalPayment implements IPaymentService {
  readonly name: string;
  private readonly user: PayPalUser;

  constructor(user: PayPalUser) {
    this.name = 'PayPalPayment';
    this.user = user;
  }

  pay(amount: number): number {
    return this.user.balance - amount;
  }

  isValid(): boolean {
    // TODO Do some code
    return true;
  }
}
