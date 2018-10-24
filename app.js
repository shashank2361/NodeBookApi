var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI', function (err, result) {
    if (err) throw err;
});

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api/Books', bookRouter);
//app.use('/api/Author', authorRouter);

app.get('/Books', function (req, res) {
    res.send('respond with a resource');
});

app.get('/', function (req, res) {
    res.send('Welcome to My Api');
 
});

//module.exports = bookRouter;

app.listen(port, function () {
    console.log('Gulp is Runnung on Port :' + port);

});



 