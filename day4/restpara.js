// 💡 Exercise 3: Create a function that receives any 
// number of args as arguments and return their sum using REST parameter


const sum=(...numbers)=>{
   return numbers.reduce((sum,ele)=>sum+ele)
}
let res=sum(1,2,3,4,5)
console.log(res)
