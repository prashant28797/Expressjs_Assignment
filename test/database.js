var request=require('supertest');
var expect=require('chai').expect;
var sinon=require('sinon');
var model=require('../user.js');


// stubbing

var modelstub=sinon.stub(model,'find');

var app=require('../app.js');
var address=request("http://localhost:8080")

describe('test my controllere',function(){

// 	describe('Find item',function(){
// beforeEach(function(){
// 	modelStub.yields(null,[{'userid':1,"jyfy":'yhh'}])
// });

// it('should find item',function(done)
// {
// 	address
// 	.get('/controller')
// })

// 	})


describe('/show',()=>{
it('it should get all the user',(done)=>{

url

.get('/show')
.end((err,res)=>{
	res.should.have.status(200);
	res.body.should.be.a('array');
	res.body.length.should.be.eql(0);
	done();
});


});

});





});
