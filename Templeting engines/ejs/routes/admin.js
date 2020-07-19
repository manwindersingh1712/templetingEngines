const express=require('express')
const path=require('path')
const rootDir=require('../util/path.js')

const router=express.Router();

const product=[];

router.get('/addproduct',(req,res,next)=>{
res.render('addproduct',
            {docTitle: 'Add-Product handlebars',
             flag:'addproduct',
             productClass: true,
             formCss:true,
             productCss: true
            })
})

router.post('/addproduct',(req,res,next)=>{
    product.push({title:req.body.pro})
    res.redirect('/');
})

exports.route= router;
exports.product= product;
