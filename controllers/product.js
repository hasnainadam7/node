const path = require('path');


const product = [];
exports.addProduct = (_, res) => {
    res.render(
     path.join(process.cwd(),'views','form.ejs'),{'title':"hello from ejs "}
    )
}

exports.submittedProduct = (req, res) => {
    product.push(req.body);
   res.send('<h1>Submitted<h1/>')
}


exports.fetchAll = (_, res) => {
    res.render("products",{products:product})
 }
 