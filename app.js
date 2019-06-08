var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
multer  = require( 'multer' );


require('dotenv').config()

const session = require('express-session');
var app = express();

app.use(session({
  secret: 'Özel-Anahtar',
  resave: false,
  saveUninitialized: true
}));


var storage = multer.diskStorage(
    {
        destination: 'public/img/',
        filename: function ( req, file, cb ) {
           
            cb( null, Date.now()+".png");
        }
    }
);

module.exports.upload = multer( { storage: storage } );
// Body Parser 
bodyParser = require('body-parser')

app.use(express.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(express.json({
    limit: '50mb'
}));

var api_routers = require('./routes/api_routers');
var admin_routers = require('./routes/admin_routers');



//defination view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(path.join(__dirname, 'public')));





// Database Configuration
mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('MongoDB is connected')
}).catch(err => {
    console.error(err)
})
mongoose.Promise = global.Promise;



const auth=require('./auth')
app.use('/api', api_routers);
app.use('/admin', admin_routers);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

app.listen(process.env.PORT)

module.exports = app;
