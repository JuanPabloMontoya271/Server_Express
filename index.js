const express  = require('express');
const path  = require("path");
const productsRouter = require('./routes/views/products')
const productsApiRouter =  require('./routes/api/products')
const bodyParser = require('body-parser');


const {
        logErrors,
        clientErrorHandler,
        errorHandler
}=require('./utils/middlewares/errorsHandlers')
// APP 
const app = express();

//Middlewares
app.use(bodyParser.json());
//static files
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");
//view engine setup
app.use("/static", express.static(path.join(__dirname, "public")));
app.use('/products', productsRouter);
app.use("/api/products", productsApiRouter)
//redirecting function
app.get('/', function(req, res){

        res.redirect('/products')

});
//error handlers
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);


//server
const server = app.listen(8000, function (){

        console.log("Server Listening in por 8000")

});
