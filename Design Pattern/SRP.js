class Employee {
  constructor(name, email, salary, otp) {
    this.name = name;
    this.email = email;
    this.salary = salary;
    this.otp = otp;
  }
}

class SalaryCalculator {
  calculate(employe) {
    console.log(`${employe.name} salary = ${employe.salary}`);
  }
}

class EmployeeRepository {
  save(employee) {
    console.log(`${employee.name} data is save on db`);
  }
}

class EmailService {
  sendMail(empolyee) {
    console.log(`Email send on ${empolyee.name}`);
  }
}

class OtpService {
  otpSend(employee) {
    console.log(`${employee.otp} send otp 3232`);
  }
}
const emp = new Employee("vikash", "vikash@gmail.com", 50000, 1212);
const salary = new SalaryCalculator();
const saveDB = new EmployeeRepository();
const email = new EmailService();
const otp = new OtpService();
salary.calculate(emp);
saveDB.save(emp);
email.sendMail(emp);
otp.otpSend(emp);
