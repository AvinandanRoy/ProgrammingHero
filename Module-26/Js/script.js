console.log("Avinandan Roy")

const addCSS = () =>{
    const btn = document.querySelector('#btn1')
    btn.classList.add('btn')
}

const makegreen = () =>{
    document.body.style.background = 'green'
}

const makered = () =>{
    document.body.style.background = 'red';
}

const makeblack= ()=>{
    document.body.style.background = 'black';
}

const purpleBtn = document.getElementById('purple');
purpleBtn.onclick=()=>{
    document.body.style.background ='purple';
}

// option -4
const pinkBtn = document.getElementById('pink');
pinkBtn.classList.add('btn')
pinkBtn.addEventListener('click',()=>{
    document.body.style.background = 'pink';
})

// option-5----we will this every times 
const blueBtn = document.getElementById('makeBlue')
blueBtn.classList.add('btn')
const makeBlue=()=>{
    document.body.style.background = 'blue';
}
blueBtn.addEventListener("click",makeBlue)