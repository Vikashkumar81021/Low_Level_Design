class Database {
  static instance = null;
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    console.log("new database object created");
    Database.instance = this;
  }
  connect() {
    console.log("database connection successfully");
  }
}
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);
