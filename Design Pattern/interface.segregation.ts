//voilation of Interface segration
class Employee {
  work() {
    console.log("working");
  }
  eat() {
    console.log("eating");
  }
  sleep() {
    console.log("sleeping");
  }
}
class Developer extends Employee {}
//yaha thik hai q ki developer eat,sleep,work krta hai

// class Robot {
//   work() {
//     console.log("working");
//   }
//   eat() {
//     //robot nhe khaata
//   }
//   sleep() {
//     //robot nhe sota
//   }
// }
// yaha interface segeration ka voilation hu q ki robot only work krta khaata,sota nheToh humne Robot ko unnecessary methods implement karne ke liye force kar diya.

//FOLLOW INTERFACE SEGREGATION
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class Human implements Workable, Eatable, Sleepable {
  work(): void {
    console.log("working");
  }
  eat(): void {
    console.log("eating");
  }
  sleep(): void {
    console.log("sleeping");
  }
}

class Robot implements Workable {
  work(): void {
    console.log("working");
  }
}

const robot = new Robot();
const human = new Human();

robot.work();

human.work();
human.eat();
human.sleep();
