var express = require('express');
var path = require('path');
var bodyparser=require('body-parser');

var user=require('./routers/router');
var app=express();



//middelware for body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//
//middelware for static path or folder which contain css,jquery,html
app.use(express.static(path.join(__dirname,'public')));

// middelware for error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.get('/check',function(req,res){
res.send("pras");
})

app.use('/',user);

app.listen(3000);

module.exports = app;