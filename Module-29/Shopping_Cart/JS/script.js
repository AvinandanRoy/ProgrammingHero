// subtotal , tax , total 
// product-1 : p1Price,p1Increase,p1Decrease,p1Quantity,p1TotalPrice
// product-2 : p2Price ,
const price =(quantity)=>{
    const prevPrice= parseFloat(document.getElementById('p1TotalPrice'))
    prevPrice = 0 ;
    const perPrice = parseFloat(document.getElementById('p1Price'));
    const p1TotalPrice = document.getElementById('p1TotalPrice').innerHTML;
    p1TotalPrice = prevPrice + (quantity * perPrice);
    return p1TotalPrice;
}

const incrementButton =(quantity) =>{
    const tempQuantity = parseFloat(quantity) ;
    return tempQuantity+1;
}
const decrementButton =(quantity)=>{
    const tempQuantity = parseFloat(quantity);
    const nextQuantity = tempQuantity- 1;
    return nextQuantity ;
}

document.getElementById('p1Increase').addEventListener('click',()=>{
    const quantity = document.getElementById('p1Quantity').innerHTML;
    document.getElementById('p1Quantity').innerHTML = incrementButton(quantity,);
    console.log(parseFloat(quantity)+1);
})

document.getElementById('p1Decrease').addEventListener('click',()=>{
    const quantity = document.getElementById('p1Quantity').innerHTML;
    document.getElementById('p1Quantity').innerHTML = decrementButton(quantity);
})