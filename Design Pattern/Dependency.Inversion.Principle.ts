// class MySQLDatabase {
//   save() {
//     console.log("Saving in MySQL");
//   }
// }

// class UserService {
//   constructor() {
//     this.db = new MySQLDatabase();
//   }

//   createUser() {
//     this.db.save();
//   }
// }
//prblm
//Kal company bole:
// MySQL hatao, PostgreSQL use karo.
// Tumhe UserService ke andar change karna padega:
// class MySQLDatabase {
//   save() {
//     console.log("Saving in MySQL");
//   }
// }
// this.db = new PostgreSQLDatabase();
// UserService ─────→ MySQL
// OrderService ────→ MySQL
// PaymentService ──→ MySQL
// ProductService ──→ MySQL

//SOLLUTION ADD ABSTRACTION
interface Database {
  save(): void;
}
class MySQLDatabase implements Database {
  save() {
    console.log("Saving in MySQL");
  }
}

class PostgreSQLDatabase implements Database {
  save() {
    console.log("Saving in PostgreSQL");
  }
}
class UserService {
  constructor(private db: Database) {}

  createUser() {
    this.db.save();
  }
}

//AGAR USERSERVICE KO MSQL CHAAHYEE
const mysql = new MySQLDatabase();

const userService = new UserService(mysql);

userService.createUser();
//AGAR USER KO POSTGRESS CHAAHEYE
const postgres = new PostgreSQLDatabase();

// const userService = new UserService(postgres);

userService.createUser();

//Magic user khud decide krta tha ki mujhe mysql chahaeye toh mongo
//tigh coupilng
// class UserService {
//     constructor() {
//         this.db = new MySQLDatabase();
//     }
// }

//NOW
// class UserService {
//   constructor(private db: Database) {}
// }
// UserService bol raha hai:

// Mujhe koi bhi Database chahiye jo save() provide karta ho.
