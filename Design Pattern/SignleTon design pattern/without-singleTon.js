class SingleTon {
  connect() {
    console.log("database connection");
  }
}

const db1 = new SingleTon();
const db2 = new SingleTon();
console.log(db1 === db2);
