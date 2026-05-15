// Create HTTP server
import exp from 'express'
const app=exp()
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'

// use body passer middleware
app.use(exp.json())

// create custom middleware
function middleware1(req,res,next){
    // send res from middleware
    res.json({message:"this res from middleware1"})
    // forward req to next middleware
    console.log("middleware1 executed")
    next();

}

function middleware2(req,res,next){
    res.json({message:"this res from middleware2"})
    console.log("middleware2 executed")
}


function middleware3(req,res,next){
    res.json({message:"this res from middleware3"})
    // console.log("middleware3 executed")
}

app.use(middleware3)
app.use(middleware1)
app.use(middleware2)

// forward req to userApi if path starts with /user-api
app.use('/user-api',userApp) //middleware

// forward req to productApi if path starts with /user-api
app.use('/product-api',productApp) //middleware

//set a port number
const port=3000
// assign port number to HTTP server
app.listen(port,()=>console.log(`server listening port ${port}...`))







