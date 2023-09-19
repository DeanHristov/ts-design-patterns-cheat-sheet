export interface IPaymentService {
  name: string;

  pay(amount: number): number;

  isValid(): boolean;
}

// The Context class
export default class PaymentService {
  private strategy: IPaymentService;

  constructor(strategy: IPaymentService) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IPaymentService) {
    this.strategy = strategy;
  }

  processOrder(amount: number): string {
    if (this.strategy.isValid()) {
      this.strategy.pay(amount);
      return `The order has been processed with ${this.strategy.name}`;
    }

    return `The order couldn't been  processed with ${this.strategy.name}`;
  }
}
