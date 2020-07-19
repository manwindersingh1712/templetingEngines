const express=require('express')
const bodyPraser=require('body-parser')
const adminData=require('./routes/admin')
const shopRouter=require('./routes/shop')
const path=require('path')
const rootDir=require('./util/path.js')

const app=express();

app.use(bodyPraser.urlencoded({extended: false}))
app.set('view engine','pug')
app.set('views','views')

app.use(express.static(path.join(__dirname,"public")))
app.use('/admin',adminData.route);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).render('error',{docTitle:'Error pug'})
})

// const server=http.createServer(app)
// server.listen(4000)
//     or 
//     |
//     V

app.listen(1000)
