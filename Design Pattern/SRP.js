class Employee {
  constructor(name, email, salary) {
    this.name = name;
    this.email = email;
    this.salary = salary;
  }
}

class CalculateSalary {
  calculate(employe) {
    console.log(`${employe.name} salary = ${employe.salary}`);
  }
}

class SaveToDB {
  save(employee) {
    console.log(`${employee.name} data is save on db`);
  }
}

const emp = new Employee("vikash", "vikash@gmail.com", 50000);
const salary = new CalculateSalary();
const saveDB = new SaveToDB();
salary.calculate(emp);
saveDB.save(emp);
