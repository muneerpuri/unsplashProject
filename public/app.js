fetch('https://api.unsplash.com/photos/?client_id=uh2SBpkxKUAdr5TWnB690ECuOeWA8z8DwgnTIH7df_s')
.then(res=>res.json())
.then(data=>{
    let imageData = data
    let html = ''
    let imageContainer = document.querySelector('.imagesContainer');
    let card = `<div class="card">
                    <img src={{imgSrc}}>
                </div>`
    imageData.forEach(element => {
        html += `<div class="card">
        <img src="${element.urls.small}">
    </div>`
    });
    imageContainer.innerHTML= html

})
.catch(e=>console.log(e))


let form = document.querySelector('form')
let textValue = document.querySelector('#textfield')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${textValue.value}&client_id=uh2SBpkxKUAdr5TWnB690ECuOeWA8z8DwgnTIH7df_s`)
    .then(res=>res.json())
    .then(data=>{
        let html = ''
        let imageContainer = document.querySelector('.SearchResults');
        if(data.results.length === 0){
            html = 'try searching something else'
        }else{
            let imageData = data.results
            console.log(imageData)
            imageData.forEach(element => {
                html += `<div class="card">
                <img src="${element.urls.small}">
            </div>`
            });
        }
        imageContainer.innerHTML= html
    
    })
    .catch(e=>console.log(e))
})