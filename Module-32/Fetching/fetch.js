

// we can use a button for this and creating a function for fetching : ---->
url = 'https://jsonplaceholder.typicode.com/todos/1'
const loadData =(url)=>{
    fetch(url).then(function(res){
        res.json().then(function(data){
            console.log(data)
        });
    }).catch(function(error){
        console.log('fetch error is :', error)
    });
};


document.getElementById('btn').addEventListener('click',()=>{
    loadData(url)
})