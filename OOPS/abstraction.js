class ATM {
  //# this sign for private method
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
// atm.withDrwa(50);

class Fan {
  turnOn() {
    console.log("Fan started");
    // andar motor start ho rahi hai
    // current flow ho raha hai
    // capacitor kaam kar raha hai
  }
  turnOf() {
    console.log("Fan stop");
    //andr kaise current stop hua,kaise motor stop hua
  }
}

const f1 = new Fan();
f1.turnOn();
f1.turnOf();
