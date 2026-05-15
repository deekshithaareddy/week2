import { getProductById, checkStock,getAllProducts } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
// 1. Get product details
let product=getProductById(productId)
// 2. Check stock availability
if(!checkStock(productId,quantity)){
return false
}

// 3. Check if product already in cart
 const item= cartItems.find(i=>i.productId===productId);

 if (item) {
 item.quantity+=quantity;//- If yes, update quantity
 }else{
 cartItems.push({ productId, quantity }); //- If no, add new item 
}
return "Item added to cart";}// 4. Return success/error message
 
 



export function removeFromCart(productId) {
// Remove product from cart
cartItems=cartItems.filter(item=>item.productId!==productId);
return cartItems;
}

export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
if (!checkStock(productId, newQuantity)) {
return false;
}
const item=cartItems.find(element=>element.productId===productId)
if(!item){
return false
}
item.quantity = newQuantity;
return true;
}

export function getCartItems() {
// Return all cart items with product details
return getAllProducts()
}

export function getCartTotal() {
// Calculate total price of all items in cart
let total=0;
cartItems.forEach(item=>{
const product=getProductById(item.productId);
total+=product.price*item.quantity;
});
// Return total
return total;

}

export function clearCart() {
// Empty the cart
cartItems=[]
}






