/* const body = document.body;
const div = document.createElement("div"); */
/* div.innerText = "hello world"; */
/* div.textContent = "hai";

body.append(div); */
/* body.appendChild("div)"); */

/* const div = document.querySelector("div");
console.log(div.textcontent);
console.log(div.innerText); */

/* let test = function () {
  console.log("z", this);
  return function () {
    console.log("y", this);
  };
};

let obj = {
  a: 1,
  b: test(),
};

obj.b(); */

/* var x = 2;
function square(x) {
  var ans = x * x;
  return ans;
}
console.log(square(x)); */

/* var x = 100;
function display() {
  console.log(x);
}
display(); */

/* function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
  return c;
}
var x = a();
console.log(b); // ref error: b is not defined - because b is not created in global scope
console.log(x()); */

/* var x = true;
if (x) {
  function greet() {
    console.log("Morning");
  }
}
greet(); */

/* const products = fetch("https://dummyjson.com/products");
console.log(products);
products.then(function (data) {
  console.log(products);
  console.log(data);
}); */

/* let cart = ["Kurti", "Jean", "Shirt", "pant"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (paymentInfo) {
      updateWalletBalance(paymentInfo);
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (PaymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo)); */

// let cart = ["Kurti", "Jean", "Shirt", "pant"];
/* const promise = createOrder(cart);
console.log(promise);
promise
  .then((orderId) => {
    console.log("orderId:", orderId);
    proceedToPayment(orderId);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* createOrder(cart)
  .then(function (orderId) {
    console.log("orderId:", orderId);
    return orderId;
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(() => {
    console.log("I am here");
  });

function proceedToPayment() {
  return new Promise((resolve, reject) => {
    resolve("payment Done");
  }); 
}*/

// function createOrder() {
//   const pr = new Promise(function (resolve, reject) {
//     //createOrder;
//     //validateCart
//     if (!validateCard()) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }
// function validateCard() {
//   return true;
// }

/* const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 10000);
});

async function getData() {
  console.log("Prom");
  const val1 = await p1;
  console.log("example 1");
  console.log(val1);

  const val2 = await p2;
  console.log("example 2");
  console.log(val2);
}

getData(); */

/* function handleFun() {
  p.then((res) => console.log(res));
  console.log("example 1");
}
handleFun(); */

// Url = "https://dummyjson.com/hai";

// async function fetching() {
//   try {
//     const res = await fetch(Url);
//     const jsonRes = await res.json();
//     console.log(jsonRes);
//   } catch (err) {
//     console.log(err);
//   }
// }

/* async function fetching() {
  const res = await fetch(Url);
  const jsonRes = await res.json();
  console.log(jsonRes);
}

fetching().catch((err) => console.log(err)); */

// const p1 = new Promise((resolve, reject) => {
//   /* setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000); */
//   setTimeout(() => {
//     reject("P1 fail");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   /* setTimeout(() => {
//     resolve("P2 Success");
//   }, 1000); */
//   setTimeout(() => {
//     reject("P2 fail");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   /* setTimeout(() => {
//     resolve("P3 Success");
//   }, 2000); */
//   setTimeout(() => {
//     reject("P3 fail");
//   }, 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//     console.error(err.errors);
//   });

//call apply bind
//call - function borrowing by passing obj reference - first argument is the obj that references to this,second arguments passed with , separated
//apply - same as call but second arguments passed as array
//bind - same as call, Instead of calling the method directly it binds the method to the current obj passed and returns a copy of function which we can invoked later.

// let name1 = {
//   firstname: "Naga",
//   lastname: "Mounika",
// };

// const print = function (food, color) {
//   console.log(
//     this.firstname +
//       " " +
//       this.lastname +
//       " fav food: " +
//       food +
//       " fav color: " +
//       color
//   );
// };
// print.call(name1, "manchuriya", "green");

// let name2 = {
//   firstname: "Naga",
//   lastname: "Mahesh",
// };
// print.call(name2, "Biryani", "Blue");
// //use call to access name1 method with name2 obj reference

// print.apply(name2, ["Biryani", "Blue"]);

// let printFun = print.bind(name1, "manchuriya", "green");
// console.log(printFun);
// printFun();

let name1 = {
  firstname: "Naga",
  lastname: "Mounika",
};

let printName = function () {
  console.log(this.firstname + " " + this.lastname);
};

let printMyName = printName.bind(name1);
printMyName();

let myBind = function (...args) {};

let printMyName1 = printName.myBind(name1);
printMyName1();
