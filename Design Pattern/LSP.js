//LSP VOIALTION
// class Bird {
//   fly() {
//     console.log("bird flying.....");
//   }
// }

// class sparrow extends Bird {
//   fly() {
//     console.log("sparroe is flying....");
//   }
// }

// class Pengium extends Bird {
//   //overiding....
//   fly() {
//     throw new Error("Pengium can not fly");
//   }
// }

// function madeForFly(bird) {
//   bird.fly();
// }
// function madeForFly() isliye banaya hai kyunki LSP violation ko demonstrate karna hai.
// madeForFly(new Pengium());

//LSP FIX
class Bird {
  eat() {
    console.log("Eating....");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("flying.....");
  }
}
class Penguin extends Bird {
  swim() {
    console.log("swiming....");
  }
}
const sparrow = new Sparrow();
sparrow.eat();
sparrow.fly();

const penguin = new Penguin();
penguin.eat();
penguin.swim();

//PRBLM SIGNUATURE
class Payment {
  pay(amount) {
    console.log("Payment");
  }
}
class UpiPayments extends Payment {
  pay(amount, otp) {
    console.log("upi payment");
  }
}

//now parent tell pay(amount)

//but child expect pay(amount,otp)
function processPayment(amount) {
  amount.pay();
}
processPayment(new UpiPayments());
// toh UpiPayment ko OTP nahi mila.
// Isliye child ne parent ke expected contract ko tod diya.
