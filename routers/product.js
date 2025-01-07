const express = require('express')
const app = express();
const route = express.Router();
const productController = require('../controllers/product')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));


route.get('/form', productController.addProduct)
route.post('/form', productController.submittedProduct)
 

module.exports = route;