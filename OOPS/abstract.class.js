class Payment {
  pay() {}
  refund() {}
}

class UPI extends Payment {
  pay() {
    console.log("Paying using UPI");
  }
}

class CreditCard extends Payment {
  pay() {
    console.log("paying  using  Credit-card");
  }
}
// Payment → Abstract class
// UPI → Concrete class
// CreditCard → Concrete class

class Animal {
  eat() {
    console.log("Animal is eating");
  }

  makeSound() {
    throw new Error("makeSound() must be implemented");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

// Problem ye hai ki Animal khud koi specific animal nahi hai.

// Actual animals hain:

// Dog
// Cat
// Cow

// Aur har animal ka sound alag hai.

// Isliye Animal ko abstract class bana sakte hain.
// Yahan Animal abstract kyu hai?

// Kyuki Animal sirf common blueprint hai:

//              Animal
//             /      \
//            /        \
//         Dog          Cat
//          |            |
//        Bark          Meow

// Animal bol raha hai:

// "Har animal ko makeSound() karna padega, lekin kaise karega ye child decide karega."
