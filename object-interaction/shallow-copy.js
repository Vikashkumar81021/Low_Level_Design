//Normal object
const teacher1 = {
  name: "Vikash",
  address: {
    city: "Delhi",
  },
};
// const teacher2 = teacher1;
// teacher2.name = "Rahul";
// console.log(teacher1.name);

// Tumne teacher2 change kiya, lekin teacher1 bhi change ho gaya.

// Kyun?

// Kyuki:

// const teacher2 = teacher1;

// ne copy nahi banayi.

// Dono same object ko point kar rahe hain:

// teacher1 ──┐
//            ↓
//         { name: "Vikash" }
//            ↑
// // teacher2 ──┘
// Shallow copy / Deep copy ka main purpose ek hi problem solve karna hai:

// Ek object ko copy karna, bina original object ko accidentally change kiye.

// SHALLOW COPY
//SHALLOW COPY SIRF FIRST LEVEL PE COPY KRTA HAI AGAR OBJECT K ANDR OBJECT HAI TOH PHIR CHANGE HO JAAEEYGA
// teacher1
//   │
//   ├── name → "Vikash"       ← actual copy
//   │
//   └── address ─────────┐
//                        ↓
//                     { city: "Delhi" }
//                        ↑
//   ┌────────────────────┘
//   │
// teacher2
const teacher2 = { ...teacher1 };

teacher2.name = "Rahul";

console.log(teacher1.name);
console.log(teacher2.name);
