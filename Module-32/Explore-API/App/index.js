//'https://jsonplaceholder.typicode.com/todos/1'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

const loadData =(url)=>{
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}

document.getElementById('btn').addEventListener('click',()=>{
    loadData(url);
})

// users url : - https://jsonplaceholder.typicode.com/users

const usersUrl = 'https://jsonplaceholder.typicode.com/users/';
let uniqueId = 0 ;

const loadUsers =(url)=>{
    uniqueId += 1 ;
    if(uniqueId <= 10){
        fetch(`${url+uniqueId}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }
    else{
        console.log("More than 10 users data not found...!")
    }
}

document.getElementById('loadUsers').addEventListener('click',()=>{
    loadUsers(usersUrl);
})