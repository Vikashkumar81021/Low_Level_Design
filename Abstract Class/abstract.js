// Yahan Animal ek abstract/base class ki tarah kaam kar rahi hai
class Animal {
  constructor(name) {
    this.name = name;

    if (new.target === Animal) {
      throw new Error("Animal class ka object nahi bana sakte");
    }
  }

  makeSound() {
    throw new Error("Child class ko makeSound() implement karna hoga");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog: Woof");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat: Meow");
  }
}

const dog = new Dog("Tommy");
const cat = new Cat("Mimi");

dog.makeSound();
cat.makeSound();
