const express=require('express')
const adminData=require('./admin')


const router=express.Router();

router.get('/',(req,res,next)=>{
    const products=adminData.product;
    res.render('shop',{prods:products,docTitle: 'Shop',flag:'shop'})
    });

module.exports=router;