// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
const cred=transactions.filter(element=>element.type=="credit")
console.log(cred)
//     2. map() to extract only transaction amounts
const amt=transactions.map(element=>element.amount)
console.log(amt)
//     3. reduce() to calculate final account balance
const balance=transactions.reduce((accumulator,element)=>accumulator+element.amount,0)
console.log(balance)
//     4. find() the first debit transaction
const frstdeb=transactions.find(element=>element.type=="debit")
console.log(frstdeb)
//     5. findIndex() of transaction with amount 10000
const tran1=transactions.findIndex(element=>element.amount===10000)
console.log(tran1)