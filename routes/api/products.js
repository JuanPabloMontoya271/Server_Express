const express = require('express');
const router  = express.Router();
const ProductsService = require('../../Services/products');

const productService  = new ProductsService();

router.get('/', async function (req, res, next){
    const { tags } = req.query;
    try{

        const products = await productService.getProducts({tags});
       
    
        res.status(200).json({

                data: products,
                message:'products listed'

                
        });

    } 
    catch(err){

        next(err);
    
    }
   
       
});
//GET
router.get('/:productId', async function (req, res, next){
    try{
        const {productId} = req.params;
    const product =  await productService.getProduct({productId})
    res.status(200).json({
        
        
            data: product,
            message:'products retrieved'

    });
    }catch(err){

        next(err);
    }
    



});
//POST
router.post('/', async function (req, res, next){
    const { body: product } = req;
    try{const product = await productService.createProduct({product})
    res.status(201).json({

            data: product,
            message:'products listed'

    });}
    catch(err){
        next(err);
    }
    



});

//put
router.put('/:productId', async function (req, res, next){
    const {productId} = req.params;
    const {body: product} = req;
    try{const updatedProduct = await productService.updateProducts({productId, product})
    res.status(200).json({

            data: productMocks[0],
            message:'products updated'

    });}
    catch(err){

        next(err);
    }
    
});

//put
router.delete('/:productId', async function (req, res, next){
    const {productId} = req.params;
    try{const product = await productService.delete({product})
    res.status(200).json({

            data: product,
            message:'products deleted'

    });}
    catch (err){
        next (err);
    }
    



});
module.exports= router;