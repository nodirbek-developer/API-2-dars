//reduce metodlari
let arr=[1,2,3,4,5];
let sum=arr.reduce((first,last)=>first-last);
console.log(sum);
//reduce matodlari

let person=[
    {name:"Jon",age:15,job:"programmer"},
    {name:"Jon",age:19,job:"programmer"},
    {name:"Tom",age:19,job:"teacher"},
    {name:"Jerry",age:22,job:"Usta"},
    {name:"Dominik",age:14,job:"programmer"},
];
console.log( person.filter(item=>{return item.name==="Jon"}));