
// array and object copy system 

const person = {
    name : 'Avinandan Roy',
    age : 23 ,
    phoneNumber : '01776890663',
    totalMoney : 140000
}

const friendList =['Pranta','Mishal','Prachaw'];

console.log(person);
console.log(friendList);

// array copying 
const friendList1 = [...friendList];
friendList1.push('Shanta');
console.log(friendList)
console.log(friendList1);

// object copying 
const person10 = {...person} ;
console.log(person10);
console.log(person10.name);
person10.bYear = 2002 ;
console.log(person10);
console.log(person);