//normal function
function add(a, b) {
  return a + b;
}
// Is function ki signature roughly:
add(a, b);

//LSP MEIN SIGNATURE
class Payment {
  pay(amount) {
    console.log("Payment....");
  }
}
//Parent method name pay(amount)

//CHILD
class UpiPayments extends Payment {
  pay(amount) {
    console.log("Upi payment");
  }
}
//child ka bhi
// pay(amount)
//Signature compatible hai.

// Ab koi function:
function processPayment(payment) {
  payment.pay(1000);
}
processPayment(new Payment());
processPayment(new UpiPayment());
//DONO MEIN PAY WORK KREGA

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
