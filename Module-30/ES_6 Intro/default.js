function addNums(a ,b ){
    console.log(a,b);
    return a+b ;
}

let sum1 = addNums(10,15);
console.log(sum1);

let sum2 = addNums(2);
console.log(sum2);

// default ---> if value is not provided take this as a default 

function summation(a=0 , b=0){
    console.log(a,b);
    return a+b;
}

const sum3 = summation(3,7);
console.log(sum3)

// so, default value is very inportant :)


// name function 
function fullName(firstName='' , lastName =''){
    console.log(`First Name ${firstName}\nLast Name : ${lastName}`);
    return firstName+' '+lastName;
}

const myName = fullName("Avinandan","Roy");
console.log(myName);

const brotherName = fullName('Pranta')
console.log(brotherName);