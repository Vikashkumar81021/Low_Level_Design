class A {
  run() {
    console.log("runing");
  }
}
class B extends A {}
const b = new B();
b.run();
