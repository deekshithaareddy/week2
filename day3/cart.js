// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//     1. Use filter() to get only inStock products
const r1=cart.filter(element=>element.inStock==true)
console.log(r1)

//  2. Use map() to create a new array with:  { name, totalPrice }
let newArray=[]
const r2=cart.map(obj=> newArray.push(obj.name,obj.price))
console.log(newArray)

//     3. Use reduce() to calculate grand total cart value
const r3=cart.reduce((acc,obj)=>acc+obj.price,0)
console.log(r3)

//     4. Use find() to get details of "Mouse"
let r4=cart.find(obj=>obj.name=="Mouse")
console.log(r4)

//     5. Use findIndex() to find the position of "Keyboard"
let r5=cart.findIndex(obj=>obj.name=="Keyboard")
console.log(r5)