var should=require("chai").should(),
 assert=require("chai").assert,
supertest=require("supertest"),
app=require("../app");
var url=supertest("http://localhost:3000");

describe("testing first route",function(err){
	it("should handle request",function(done)
	{


	 url

	    .get("/show")
	     .expect('Content-Type', /json/)
	    .expect(200,done)
	    .end(function(err,res){
	    // if(!err){
	    //  console.log("sucess");
	    // }

	      res.text.should.be.equal("hellohello");
	      done();
	    });
	});


	it("should test multiplication",function(done)
	{
		url

		.post("/product/3/4")
		//.expect('Content-Type', /json/)
	   // .expect(200,done)
	    .end(function(err,res){
	    	  //res.text.should.be.equal("12");
	    	  assert.equal(res.text,"12");
	    	  done();

	});
	  });
});