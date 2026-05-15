   // Available coupons
  const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
  };
  
  // TODO: Implement these functions
  
  export function validateCoupon(couponCode, cartTotal, cartItems) {
    // 1. Check if coupon exists
  const coupon=coupons[couponCode];
  if(!coupon){
    return false
  }
    // 2. Check minimum amount requirement
    if(cartTotal<coupon.minAmount){
    return false
  }
    // 3. Check category requirement (if any)
    let categoryreq=true
    if(coupon.category){
    categoryreq=cartItems.find(i=>i.category===coupon.category);
    // Return { valid: true/false, message: '...' }
    }
    if(!categoryreq){
      return false
    }
  }
  
  export function calculateDiscount(couponCode, cartTotal) {
    // Calculate discount amount based on coupon type
  const coupon=coupons[code];
  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;// Return discount amount
  }
    
  }
  
  export function applyDiscount(cartTotal, couponCode, cartItems) {
    // 1. Validate coupon
    const validation=validateCoupon(couponCode,cartTotal,cartItems);

  if (!validation.valid) {
    return false
    };
    // 2. If valid, calculate discount
    const discount = calculateDiscount(code, cartTotal);
    // 3. Return final amount and discount details
    // Return { 
    //   originalTotal: ..., 
    //   discount: ..., 
    //   finalTotal: ...,
    //   message: '...'
    // }
     return {
    originalTotal:cartTotal,
    discount,
    finalTotal:cartTotal-discount,
    message:"Discount applied"
  }
  }






