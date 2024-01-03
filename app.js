const express=require('express');
const path= require('path')
const app=express();
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/contactDance')
const port=80;
var contactschema=new mongoose.Schema({
    name:String,
    phone:String,
    address:String,
    email:String,
})
var Cont=new mongoose.model('Cont',contactschema)

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
app.post('/contact',(req,res)=>
        {   
            var mydata =new Cont(req.body)
            mydata.save().then(()=>{
                res.send("saved")
            }).catch(()=>
            {res.status.send("failed")})
     }) 

app.listen(port,()=>{
        console.log(`application started on port ${port}`)
 })
