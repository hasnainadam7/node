// const http = require('http');
// const fs = require('fs');
// const path = require('path')


// const filePath = path.join(process.cwd(), 'data.txt')

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         res.setHeader('Content-Type', "text/html")
//         res.write("<h1>hello world</h1><br><form action=/submit method ='post'><input name='data'/> <button>Submit</button></form>");
//         res.end();
//     } else if (req.url === "/submit") {
//         // res.setHeader('Content-Type', "text/html")
//         let data = "";
//         req.on('data', chunk => { data += chunk }

//         )
//         req.on('end', () => {
//             fs.readFile(filePath, (err, readData) => {
//                 fs.writeFile(filePath, readData + '\n' + data, () => {
//                     res.write("data recived");
//                     res.end();
//                 })
//             })



//         }

//         )

//     } else {
//         res.write('404 - not found')
//         res.end();
//     }
//     // res.end();

// })

// server.listen(3000);

//intial packages
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path')


//intial routes
const indexRoutes = require('./routers/index')
const productRoutes = require('./routers/products')


// Set the view engine to EJS
app.set('view engine', 'ejs');

// // Set the views directory 
app.set('views','views');

//this line use to convert data into string 
app.use(bodyParser.urlencoded({extended:false}));

//make the folder publicaly available 
app.use(express.static(path.join(process.cwd(),"public")));

//routes 
app.use('/',indexRoutes)
app.use('/product',productRoutes);



//server Starts at port 

const port = 3000
app.listen(port)