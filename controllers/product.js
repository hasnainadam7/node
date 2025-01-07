const path = require('path');

exports.addProduct = (_, res) => {
    res.render(
     path.join(process.cwd(),'views','form.ejs'),{'title':"hello from ejs "}
    )
}

exports.submittedProduct = (_, res) => {
   res.send('<h1>Submitted<h1/>')
}
