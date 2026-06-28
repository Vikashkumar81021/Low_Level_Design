class ATM {
  withDrwa(amount) {
    this.#verifyPin();
    this.#checkBalance();
    console.log("cash withdraw");
  }
  #verifyPin() {
    console.log("pin verify successfull");
  }
  #checkBalance(amount) {
    console.log("Amount check successfully");
  }
}
const atm = new ATM();
atm.withDrwa(50);
