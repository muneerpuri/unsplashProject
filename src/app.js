const express = require('express')
const app = express()
const path = require('path')
const request = require('postman-request');
const hbs = require('hbs')
const publicFolderDirectory = path.join(__dirname,'../public')
const viewsDirectory = path.join(__dirname,'../templates')
const partialsDirectory = path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewsDirectory)
hbs.registerPartials(partialsDirectory)
app.use(express.static(publicFolderDirectory))
app.get('/',(req,res)=>{

    request('https://api.unsplash.com/photos/random?client_id=uh2SBpkxKUAdr5TWnB690ECuOeWA8z8DwgnTIH7df_s', function (error, response, body) {
        if(error){
            return res.send('something wen\'t wrong',error)
        }
        const bannerData = JSON.parse(body)
        console.log(bannerData)
        console.log(bannerData.urls.full)
        res.render('index',{
            title: 'unsplash API project',
            imgSrc: bannerData.urls.full,
            shotBy: bannerData.user.name
        })
    });
    

})

app.get('/search',(req,res)=>{
    res.render('search',{
        title: 'search images'
    })
})
const port = process.env.port || 3000

app.listen(port,()=>{
    console.log('started at port',port)
})