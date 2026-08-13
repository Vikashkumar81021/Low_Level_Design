class User {
  placeOrder(order) {
    order.create();
  }
}
class Order {
  create() {
    console.log("Order is created");
  }
}

const user = new User();
const order = new Order();
user.placeOrder(order);
