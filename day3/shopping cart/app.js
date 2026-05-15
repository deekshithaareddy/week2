import{
getAllProducts,
searchProducts,
getProductsByCategory
}from'./product.js';

import{
addToCart,
getCartItems,
getCartTotal,
updateQuantity,
removeFromCart
}from'./cart.js';

import{processPayment}from'./payment.js';

console.log('===E-CommerceStore===\n');

//1.Browseproducts
console.log('AllProducts:');
console.log(getAllProducts());

//2.Searchforproducts
console.log('\nSearchingfor"phone":');
console.log(searchProducts('phone'));

//3.Additemstocart
console.log('\n===AddingtoCart===');
console.log(addToCart(1,2));//2Laptops
console.log(addToCart(3,3));//3Headphones
console.log(addToCart(1,1));//1moreLaptop(shouldupdatequantity)

//4.Viewcart
console.log('\n===CurrentCart===');
console.log(getCartItems());
console.log('CartTotal:',getCartTotal());

//5.Updatequantity
console.log('\n===UpdatingQuantities===');
console.log(updateQuantity(1,2));//Changelaptopquantityto2

//6.Removeitem
console.log('\n===RemovingItem===');
console.log(removeFromCart(3));//Removeheadphones

//7.Viewupdatedcart
console.log('\n===UpdatedCart===');
console.log(getCartItems());
console.log('CartTotal:',getCartTotal());

//8.Checkoutwithcoupon
console.log('\n===Checkout===');
const order=processPayment('upi','WELCOME10');
console.log(order);
