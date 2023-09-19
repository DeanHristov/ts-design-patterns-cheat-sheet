export default class PayPalUser {
  username: string;
  password: string;
  balance: number;

  constructor(username: string, password: string, balance: number) {
    this.username = username;
    this.password = password;
    this.balance = balance;
  }
}
