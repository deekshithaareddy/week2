//  Goal: Learn array copying with spread
                        
                        // You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        // Tasks
                            //   -> Create a new array moreFruits
                            let morefruits=["papaya","mango"]
                              
                            //   -> Copy all fruits from fruits
                            let allfruits=[...fruits,...morefruits]
                            //   -> Add "orange" at the end using spread
                            let cpfruits=[...fruits,"orange"]
                              
                            //   -> Print both arrays
                            console.log(fruits)
                            console.log(cpfruits)
                        
                        
                        
                        // ✅ Expected Output
                        //       ["apple", "banana"]
                        //       ["apple", "banana", "orange"]
                        
                        // 👉 Original array should NOT change.