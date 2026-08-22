class Teacher {
  //   #name;
  //   #age;
  #email;
  constructor(name, age, email) {
    // this.#name = name;
    // this.#age = age;
    // this.#email = email;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  addTeacherName() {
    console.log("Teacher Name is", this.name);
  }
  changeEmail(email) {
    this.email = email;
  }
  getAge() {
    return this.#email;
  }
}

const teacher = new Teacher("Vikash", 25, "vikash@example.com");
const teacher1 = new Teacher("Rohit", 25, "rohit@gmail.com");
teacher.addTeacherName();
teacher1.addTeacherName();
console.log(teacher1.email);
console.log(teacher.getAge());

teacher1.changeEmail("lucky@gmail.com");
console.log(teacher1.email);
