// 🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
    //   1. Create a deep copy of order
    const cporder=structuredClone(order)


    //   2. Modify in copied object:
    //         i. customer.address.city
    //         ii. items[0].price
    //         iii. Verify original object remains unchanged

            cporder.customer.address.city="Banglore"
            cporder.items[0].price=50000
            console.log(order)
            console.log(cporder)



