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
console.log(calculateSalary(dev, 4000));
console.log(calculateSalary(mang, 1000));
