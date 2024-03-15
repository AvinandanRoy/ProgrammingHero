user = {
    id : 1234 , 
    name : 'Avinandan' , 
    job : 'Coder'
};
console.log(user);

// javaScript object notation (json)

const stringified = JSON.stringify(user)
console.log(stringified );


const shop ={
    owner : 'Avinandan Roy',
    address : {
        street : 'Chandgao',
        city : 'Dhaka',
        country : 'Bangladesh'
    },
    product : ['Smartphone', 'Laptop', 'PC', 'Tablet'],
    revenue : 50000 ,
    isOpen : true ,
    isNew : false 
}

console.log(shop);
const stringified2 = JSON.stringify(shop);
console.log(stringified2);

const parseStringified = JSON.parse(stringified2);
console.log(parseStringified);
