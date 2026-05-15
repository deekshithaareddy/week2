 import { reduceStock } from './product.js';
 import { getCartItems, getCartTotal, clearCart } from './cart.js';
 import { applyDiscount } from './discount.js';
 
 // TODO: Implement these functions
 
 export function processPayment(paymentMethod, couponCode = null) {
 // 1. Get cart items and total
 const items=getCartItems();
 const subtotal = getCartTotal();
 let total=subtotal;
 let discount=0
 // 2. Apply discount if coupon provided
 if (couponCode) {
    const result=applyDiscount(total,couponCode,items);
    discount = result.discount;
    total=result.finalTotal;
 }
 // 3. Validate payment method (card/upi/cod)
 if (!validatePaymentMethod(paymentMethod)) {
    return false
  }
 // 4. Process payment (simulate)
 // 5. Reduce stock for all items
 items.forEach(item=>{
    reduceStock(item.productId,item.quantity);
  });
 // 6. Clear cart
  clearCart();
 // 7. Generate order summary
 
 // Return order summary:
 // {
 // orderId: ...,
 // items: [...],
 // subtotal: ...,
 // discount: ...,
 // total: ...,
 // paymentMethod: ...,
//   status: 'success/failed',
    //   message: '...'
    // }
     return {
    orderId:generateOrderId(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: "success",
    message:"Payment successful"
  };
  }
  
  export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    const methods=["card","upi","cod"];
    return methods.includes(method);
  }
  
  function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
  }

                          




