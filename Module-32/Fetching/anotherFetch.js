
const loadUser =(url)=>{
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser =(data)=>{
    console.log(data)
}

const url ='https://jsonplaceholder.typicode.com/users';

document.getElementById('btn1').addEventListener('click',()=>{
    loadUser(url)
})
