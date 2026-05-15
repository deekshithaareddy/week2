// Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];

                           export function getProductById(id) {
                            // Find and return product by ID
                            let product=products.find(element=>element.id==id)
                          }
                          
                          export function getAllProducts() {
                            // Return all products
                            return products
                          }
                          
                          export function getProductsByCategory(category) {
                            //filter products by category
                            let electronics=products.filter(element=>element.category=="electronics")
                            let accessories=products.filter(element=>element.category=="accessories")
                          }
                          
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                            return true

                          }
                          
                          export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            // Return true/false
                            if(products.stock>0){
                              return true
                            }
                          }
                          
                          export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                            products.map(element=>{
                              if(element.id==productId){
                                stock=stock-quantity
                              }
                            })
                          }