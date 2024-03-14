console.log("Next :)");

const difference =(x , y)=>{
    if(x > y){
        return x-y;
    }
    else{
        return y-x ;
    }
}

const firstDiff = difference(20,30);
console.log(firstDiff);

const getAge =(person)=>{
    console.log(typeof(person.age));
    return person.age;
}

const person1 ={
    name : 'Avinandan Roy',
    age : 23
}

console.log(getAge(person1));

// get a array from 3 no position using a function 

const getThirdElement =(array)=>{
    return array[2];
}

const familyNames = ['Krishna', 'Shanto','Lipi','Pranta'];
console.log(getThirdElement(familyNames));