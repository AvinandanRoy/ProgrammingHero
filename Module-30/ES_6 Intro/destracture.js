console.log("Next :)");

const myInfo ={
    name : 'Avinandan',
    phone : '01776890663',
    age : 23 ,
    money : '10000000000000000000b'
}

// if right side is an object left side of destruction will be object as well 
// must use property name as a variable name .s

const {name} = myInfo ;
const {phone} = myInfo;

console.log( phone);
console.log(name);
console.log(name.length);