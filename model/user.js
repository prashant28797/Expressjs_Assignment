var mongoose=require('mongoose');
var schema=mongoose.Schema;

var UserSchema=new schema({
userid:String,
name:String,
email:String,
number:Number
});

module.exports=mongoose.model('user',UserSchema);