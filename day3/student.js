// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"


const students = [
   { id: 1, name: "Ravi", marks: 78 },
   { id: 2, name: "Anjali", marks: 92 },
   { id: 3, name: "Kiran", marks: 35 },
   { id: 4, name: "Sneha", marks: 88 },
   { id: 5, name: "Arjun", marks: 40 }
 ];

 //     1. filter() students who passed (marks ≥ 40)
 const r1=students.filter(obj=>obj.marks>=40)
 console.log(r1)

 //     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
const r2=students.map(obj=>{
if(obj.marks>=90){return obj.field='A'}
else if(obj.marks>=75 && obj.marks<90){return obj.field='B'}
else if(obj.marks>=60 && obj.marks<75){return obj.fiekd='c'}
else{return obj.field='D'}
})
console.log(students)

//    3. reduce() to calculate average marks
const r3=students.reduce((accumulator,obj)=>accumulator+obj.marks,0)
console.log(r3/students.length)


//    4. find() the student who scored 92
const r4=students.find(obj=>obj.marks==92)
console.log(r4)

//    5. findIndex() of student "Kiran"
const r5=students.findIndex(obj=>obj.name=="Kiran")
console.log(r5)



