const path = require('path')
exports.index= (_,res)=>{
    res.render(path.join(process.cwd(),'views','index.ejs'),{date : new Date()})
}