const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();

chai.use(chaiHttp);

describe("Get Asset Request by ID", () => {
  it("it should GET asset request by id: 56", (done) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcxNjYxNjgzMSwiZXhwIjoxNzE3NDgwODMxfQ.8swZRpGKqCEprgAEjdNc_Gy2ZE6x4Ok6NGwjYQuooeg";

    chai
      .request("http://localhost:3002")
      .get("/assetRequest/getAssetRequestById/56")
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(1);
        res.body[0].should.have.property("id").eql(56);
        res.body[0].should.have.property("user_id").eql(78);
        res.body[0].should.have.property("asset_id").eql(13);
        res.body[0].should.have.property("assetname").eql(null);
        res.body[0].should.have.property("username").eql("raghu torvi");
        res.body[0].should.have
          .property("asset_description")
          .eql("A high-performance laptop for professionals.");
        res.body[0].should.have.property("asset_request_type").eql("borrow");
        res.body[0].should.have.property("asset_request_status").eql("Pending");
        res.body[0].should.have.property("created_at");
        res.body[0].should.have.property("updated_at");
        done();
      });
  });
});
