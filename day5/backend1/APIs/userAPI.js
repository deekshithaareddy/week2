// Create mini-express
import exp from 'express'
export const userApp=exp.Router()



// Test data(Replace this test data with DB)
let users=[]
// Create API(REST API REpresentational State Transfer API)

    // Route to handle GET req of client(http://localhost:3000/users)
    userApp.get('/users',(req,res)=>{
        // send res to client
        res.json({message:"All users",payload:users})
    })

     // Route to handle GET req of client by id
    userApp.get('/users/:id',(req,res)=>{
          // get id from url
          let idOfUrl=Number(req.params.id)
          // find index of id
          let user=users.find(userObj=>userObj.id===idOfUrl)
          if(user===undefined){
               return res.json({message:"User not found"})
          }
        // send res to client
        res.json({message:`User of id ${idOfUrl}`,payload:user})
    })
    // Route to handle POST req of client
    userApp.post('/users',(req,res)=>{
     // get user from client
     const newUser=req.body
     // push user into users
     users.push(newUser)
     res.json({message:"User created"})
    })
    // Route to handle PUT req of client
    userApp.put('/users',(req,res)=>{
     // get modified user from client 
     let modifiedUser=req.body
     // get index of existing user in users array
     let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
     // if user not found
     if(index===-1){
          return res.json({message:"User not found"})
     }
     // update user iwith index
     users.splice(index,1,modifiedUser)
     // send response
     res.json({message:"User modified"})
    })
    // Route to handle DELETE req of client
    userApp.delete('/users/:id',(req,res)=>{
     // get id of user from url parameter
     let idOfUrl=Number(req.params.id)
     // find index of user
     let index=users.findIndex(userObj=>userObj.id===idOfUrl)
     // if user not found
     if(index===-1){
     return res.json({message:"User not found"})
     }
     // delete user by index
     users.splice(index,1)
     // send response
     res.json({message:"User deleted"})
    })