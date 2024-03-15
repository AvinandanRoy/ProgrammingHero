// for of loop used in array and string 
// for in loop used in object 

console.log("Avinandan Roy start module-31 by the grace of almyghty Ishwar");


// create a nested object 

const person ={
    name : 'Avinandan',
    personalInfo : {
        sureName : 'roy',
        age : 23 ,
        uni : 'DIU'
    }
}
console.log(person.personalInfo.sureName)

const data = [{name : 'Krishna',age : 23 }]
console.log(data[0].name)

const person1 = [
    'Avinandan Roy',
    {name : 'Lipi', age : '40', bYear : 1980},
    {name : 'Krishna', age : '45', bYear : 1971}
]

console.log(person1[1].name)
console.log(person1[2].name)

const krishnaInfo = {...person1[2]}
console.log(krishnaInfo);
console.log(person1[2])

krishnaInfo.salary = 40000 ;
console.log(krishnaInfo);
console.log(person1[2])

const user ={
    id : 4899 ,
    name : 'Pranta Roy',
    address : {
        street:{
            first : '22/13 Zigatola',
            second : 'Bus Stand',
            third : 'Blue Cafe'
        }
    }
}

console.log(user.address.street.second)

const user1 ={
    address : {
        city: 'Dhaka',
        zip : 1213 
    }
}
console.log(user1.address.street?.second?.city)
