console.log("Next :)");

const max = Math.max(4,2,8,9,1,17);
console.log(max);

const numbers = [1,4,7,9,100,210,14];
console.log(Math.max(...numbers)); //This is spread operator like ...(three dots)

// using spread operator to copy 
const copyNumbers = [...numbers] ;
copyNumbers.push(10);
console.log(copyNumbers);
console.log(numbers)
copyNumbers.push(4899);
console.log(copyNumbers);
console.log(numbers);