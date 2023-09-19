export default class Card {
  cardNumber: string;
  cardHolder: string;
  cvv: number;
  balance: number;

  constructor(
    cardNumber: string,
    cardHolder: string,
    cvv: number,
    balance: number,
  ) {
    this.cardHolder = cardHolder;
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.balance = balance;
  }
}
