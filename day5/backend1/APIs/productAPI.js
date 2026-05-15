import exp from 'express'
export const productApp=exp.Router()

// Create product API with below operations
let products=[]
    // Create new Product({ProductId,name,brand,price})
    productApp.post('/products',(req,res)=>{
        // get a new product req
        let newProduct=req.body
        // push product to products
        products.push(newProduct)
        // send res
        res.json({message:"New product created"})
    })
    // Read all products
    productApp.get('/products',(req,res)=>{
        // send res of all products
        res.json({message:"All products",payload:products})
    })
    // Read all products by brand
    productApp.get('/products/:brand',(req,res)=>{
        // get brand from url
        let brandOfUrl=req.params.brand
        // find product by brand  
        let product=find(productObj=>productObj.brand==brandOfUrl)
        if(product===undefined){
            return res.json({message:"Product not found"})
        }
        res.json({message:`Product of brand ${brandOfUrl}`,payload:product})
        
    })
    // Update a product
    productApp.put('/products:id',(req,res)=>{
        modifiedProduct=req.body
        // get modified product
        let idOfUrl=Number(req.params.id)
        // update product in array
        let index=findIndex(productObj=>productObj.id===idOfUrl)
        if(index===-1){
            return res.json({message:"Product not found"})
        }
        let product=products.splice(index,1,modifiedProduct)
        res.json({message:`Product of ID ${idOfUrl} updated`,payload:product})

    })
    // Delete a product by id
    productApp.post('/products',(req,res)=>{
        // get id from url
        let idOfUrl=Number(req.params.id)
        // find index
        let index=products.findIndex(productObj=>productObj.id===idOfUrl)
        if(index==-1){
            return res.json({message:"Product not found"})
        }
        let product=products.splice(index,1)
        res.json({message:`Product of ID ${idOfUrl} deleted`})

    })






