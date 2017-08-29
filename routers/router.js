var express=require('express');
var bodyparser=require('body-parser');
var router=express.Router();
var mongoose=require('mongoose');


var user=require('../model/user');

//connection with database

var db='mongodb://localhost:27017/student';
mongoose.connect(db);




//show user
var a=router.get('/show',function(req,res){
	console.log('ckeck');
	user.find({})
	.exec(function(err,user){
		if(err){
			res.send('error has occured');
		}else{
			console.log(user);
			//res.json(user);
                          res.send("hello");
		}
	});
});


//Insert user
router.post('/insert', (req, res) =>
  user.create(req.body, (err, user) => {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(user);
      res.send(user);
  }
}));



//multiply
router.post('/product/:id/:id1',(req,res)=>{

	var a=req.params.id,
	b=req.params.id1;
	console.log(a);
	var mul=a*b;
	res.send(mul.toString());
})


//delete user
router.delete('/remove',function(req,res){
user.remove({_id:req.body._id}, function (err,user) {
  if (!err) {
  	res.send(user);
  }
  else{
  res.send(user);
}
});
});


//update user
router.put('/user/:id', (req, res) =>{
	console.log(req.params.id);
  user.findOneAndUpdate({_id: req.params.id},req.body,(err,user)=>{
  if(!err){
  	res.send(user);
  }
  else{
  	res.send(user);
  }
  });
});

module.exports = router;
