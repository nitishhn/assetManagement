const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();

chai.use(chaiHttp);

describe("User Login", () => {
  it("it should POST login and receive a token", (done) => {
    const loginDetails = {
      username: "raghu torvi",
      password: "nitish@123",
    };

    chai
      .request("http://localhost:3002")
      .post("/users/login")
      .send(loginDetails)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("token");
        res.body.should.have.property("role").eql("user");
        res.body.should.have.property("userId");
        res.body.should.have.property("userName").eql("raghu torvi");
        res.body.should.have.property("message").eql("Login successful");
        done();
      });
  });
});

describe("Get User by ID", () => {
  it("it should GET user by id: 59", (done) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcxNjYxNjgzMSwiZXhwIjoxNzE3NDgwODMxfQ.8swZRpGKqCEprgAEjdNc_Gy2ZE6x4Ok6NGwjYQuooeg";

    chai
      .request("http://localhost:3002")
      .get("/users/getUserById/59")
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("user_id").eql(59);
        res.body.should.have.property("username").eql("girish");
        res.body.should.have.property("email").eql("girish23@gmail.com");
        res.body.should.have.property("password");
        res.body.should.have.property("name").eql("santu");
        res.body.should.have.property("gender").eql("male");
        res.body.should.have.property("phone_number").eql("8383839393");
        res.body.should.have.property("address").eql("hyderabad");
        res.body.should.have.property("role").eql("user");
        res.body.should.have.property("created_at");
        res.body.should.have.property("updated_at");
        done();
      });
  });
});
