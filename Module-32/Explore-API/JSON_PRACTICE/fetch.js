// .json is not simillar but closer to JSON.parse()

const url = 'https://jsonplaceholder.typicode.com/todos/1'

const loadData = (url)=>{
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

document.getElementById('btn').addEventListener('click',()=>{
    loadData(url);
})