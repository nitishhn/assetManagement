const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index"); // Update with the correct path to your server
const should = chai.should();

chai.use(chaiHttp);

//mocha src\test\assetRequestService.test.js

describe("Get Asset Service Request by ID", () => {
  it("it should GET asset service request by id: 1", (done) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTY2MTczMzMsImV4cCI6MTcxNzQ4MTMzM30.cTs_WBvogvZGWP6taFaOvFYAnuctYMX5ZWQAAzSCm5Y";

    chai
      .request("http://localhost:3002")
      .get("/assetServiceRequest/getAssetServiceRequestById/1")
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("id").eql(1);
        res.body.should.have.property("user_id").eql(13);
        res.body.should.have.property("asset_id").eql(23);
        res.body.should.have.property("issue_type").eql("repair");
        res.body.should.have.property("issue_resolve_status").eql("unsolved");
        res.body.should.have
          .property("description")
          .eql("Asset requires maintenance due to wear and tear.");
        res.body.should.have.property("created_at");
        res.body.should.have.property("updated_at");
        done();
      });
  });
});
