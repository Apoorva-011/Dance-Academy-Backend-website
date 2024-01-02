const express=require('express');
const path= require('path')
const app=express();
const port=80;
app.use('/static',express.static('static'))
app.use(express.urlencoded({ extended: true }));
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>
{   
    const params={}
    res.status(200).render('index.pug',params)})
app.get('/contact',(req,res)=>
    {   
        const params={}
        res.status(200).render('contact.pug',params)})

app.listen(port,()=>{
        console.log(`application started on port ${port}`)
 })
