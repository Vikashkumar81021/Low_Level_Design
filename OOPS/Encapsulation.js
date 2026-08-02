class BankAccount {
  #balance = 1000;
  deposite(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const balance = new BankAccount();
balance.deposite(5000);
// balance.#balance = 34646;//error bcoz balance is private variable
console.log(balance.getBalance());
