// https://jsonplaceholder.typicode.com/posts

const loadPost =(url)=>{
    fetch(url)
    .then(res => res.json())
    .then(data => disPlayPost(data))
}

const disPlayPost =(data)=>{
    for(const user of data){
        const div = document.createElement('div')
        div.classList.add('post')
        const id = document.createElement('h2')
        const title = document.createElement('h4')
        const body = document.createElement('p')
        id.textContent= user.id
        title.innerHTML =user.title;
        body.innerHTML = user.body ;

        div.appendChild(id)
        div.appendChild(title)
        div.appendChild(body)
        document.getElementById('postingId').appendChild(div)
    }
}

document.getElementById('loadingButton'),addEventListener('click',()=>{
    url = 'https://jsonplaceholder.typicode.com/posts';
    loadPost(url)
})

