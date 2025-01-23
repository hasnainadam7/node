const path = require('path');
const Product = require('../models/products')


exports.addProduct = (_, res) => {
    res.render(
     path.join(process.cwd(),'views','form.ejs'),{'title':"hello from ejs "}
    )
}

exports.submittedProduct = (req, res) => {
    const product = new Product(req.body);
    product.save();
   res.send('<h1>Submitted<h1/>')
}


exports.fetchAll = (_, res) => {
    console.log(Product.fetchAll());
    res.render("products",{products:Product.fetchAll()})
 }
 