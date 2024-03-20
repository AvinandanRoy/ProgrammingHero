const loadUser2 =(url)=>{
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser2(data))
}

const displayUser2=(data)=>{
    for(const user of data){
        const h1 = document.createElement('h1')
        h1.classList.add('info');
        h1.textContent = user.username ;
        document.getElementById('outPutBox').append(h1)
    }
}
// user has already been declares previous js file so we do not callthis again. thats why we dont use url here
document.getElementById('btn2').addEventListener('click',()=>{
    loadUser2(url)
})