
const numbers = [4,2,5,6,7,10,3];

// system 1 ----> 
const doubleNumbers = [];

for (let i =0 ; i < numbers.length ; i++){
    doubleNumbers.push(numbers[i] * numbers[i]);
}

console.log(doubleNumbers);
console.log(Math.max(...doubleNumbers));

// system 2 ----> using map method 

const result = numbers.map((num)=>{
    return num*2 ;
})

console.log(result);


const myFamily =['Krishna Kanta Roy','Lipika Rani Roy', 'Avinandan Roy', 'Pranta Roy']

const myFamilyNameLength = myFamily.map((member)=>{
    return member.length;
})

console.log(myFamilyNameLength);