alert('Your Coupon code is : Avinandan4899');

document.getElementById('disCountBtn').addEventListener('click',()=>{
    const newAddElement = document.getElementById('newAddElement');
    const input = document.createElement('input');
    input.type = Text ;
    input.classList.add('inputField')
    newAddElement.appendChild(input);
    const button = document.createElement('button');
    button.textContent = 'Buy';
    button.classList.add('buyBtn')
    newAddElement.appendChild(button);
    button.addEventListener('click',()=>{
        if(input.value === 'Avinandan4899'){
            const prevPrice = parseFloat(document.getElementById('productPrice').innerHTML);
            newPrice = prevPrice-((prevPrice *50 )/100);
            document.getElementById('productPrice').textContent = newPrice;
        }else{

        }
    })
})

