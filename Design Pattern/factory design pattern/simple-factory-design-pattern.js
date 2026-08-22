class Burger {
  prepare() {}
}

class BasicBurger extends Burger {
  prepare() {
    console.log("Basic Burger is prepare");
  }
}
class StandardBurger extends Burger {
  prepare() {
    console.log("Standard Burger is prepare");
  }
}

class PremireBurger extends Burger {
  prepare() {
    console.log("Premimure Burger is prepare");
  }
}

class BurgerFactory {
  create(type) {
    if (type === "basic") {
      return new BasicBurger();
    } else if (type === "standrd") {
      return new StandardBurger();
    } else if (type === "premiure") {
      return new PremireBurger();
    } else {
      throw new Error("Invalid Type");
    }
  }
}
const type = "basic";
const burgerFactory = new BurgerFactory();

const burger = burgerFactory.create(type);
burger.prepare();
