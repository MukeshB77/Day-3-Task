const ani = 
[
    { name:"Lion",amount: 3,age:[10,4,6,2,6,3],


        
        
        del(){
         return this.amount.filter((a)=>a.age>3);}
        },

    {name:"Tiger",amount: 10,age:6},
    {name:"Cheetah",amount: 2,age:9},
    // del(){
         
    // }
];
ani[0].del();
console.log(ani);

// const total = ani.filter((a)=>a.age>7).map((a)=>a.amount).reduce((a,s)=> a+s);

// console.log(total);
//  ani.filter((a)=>a.age>5).map((a)=>a.amount).pop();
// //  console.log(hello);
//  console.log(ani);

// ani.pop((a)=>a.amount>10);
//  console.log(ani);
