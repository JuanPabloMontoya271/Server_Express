const express = require ('express');
const router = express.Router();
const productMocks = require('../../utils/mocks/products');
const ProductsService = require('../../Services/products');

const productService = new ProductsService();


router.get('/', async function (req, res, next){
        const {tags } = req.query;
        const products = await productService.getProducts({ tags });
        res.render('products', {productMocks});

});

module.exports = router;