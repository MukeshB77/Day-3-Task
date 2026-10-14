const arr = [120,60,899];
console.log(arr.reduce((a,b)=>a+b));



const names = [ {name:"kiran",marks : 10}
    ,{name:"siren",marks:20}
    ,{name:"Liren",marks:49}
    ,{name:"Karan",marks:94}
    ,{name:"jiren",marks:50}];


    // const res = names ?? "kiren"  `this.marks`

console.log(names.find((a)=>a.name=="kiran")??`Not Found`);


// let name ="jiren";

// //  const hello = function makegreeter(greeting){
// //     return ()=>{

// //     }

// // }

const makegreeter=(g)=>(n)=>{
    return `${g}${n}`;
}
console.log(makegreeter("hello")("asha"));





async function loaduser(){
try{
const res = await fetch(    "   https://jsonplaceholder.typicode.com/users");
const users =  await res.json();

console.log(users[0].name);
let names = users.map((e)=>e.name);
console.log(names);
}
catch(error){
  console.log("Error occured",error);
}
}

loaduser();




