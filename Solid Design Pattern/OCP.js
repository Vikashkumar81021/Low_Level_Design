class Developer {
  calculatebonous(sal) {
    return sal + 4000;
  }
}
class Manager {
  calculatebonous(sal) {
    return sal + 1000;
  }
}

//common function
function calculateSalary(emp, sal) {
  return emp.calculatebonous(sal);
}

const dev = new Developer();
const mang = new Manager();
// console.log(calculateSalary(dev, 4000));
// console.log(calculateSalary(mang, 1000));

class Bird {
  fly() {
    console.log("Bird fly");
  }
  makeSound() {}
}

class Sparrow extends Bird {
  fly() {
    console.log("Bird fly");
  }
  makeSound() {
    console.log("sparrow sound");
  }
}

class Pengium extends Bird {
  fly() {
    throw new Error("Pengium can not fly");
  }
  makeSound() {
    console.log("Pengium sound");
  }
}

function makeBirdFly(Bird) {
  Bird.fly();
}

makeBirdFly(new Pengium());
