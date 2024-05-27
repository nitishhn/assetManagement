const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index"); // Update with the correct path to your server
const should = chai.should();

chai.use(chaiHttp);

describe("Get Asset by ID", () => {
  it("it should GET asset by id: 13", (done) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcxNjYxNjgzMSwiZXhwIjoxNzE3NDgwODMxfQ.8swZRpGKqCEprgAEjdNc_Gy2ZE6x4Ok6NGwjYQuooeg";

    chai
      .request("http://localhost:3002")
      .get("/assets/getAssetById/13")
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("asset_id").eql(13);
        res.body.should.have.property("category_id").eql(1);
        res.body.should.have.property("name").eql("Lenovo Laptop");
        res.body.should.have.property("model").eql("ThinkPad X1 Carbon");
        res.body.should.have.property("manufacturing_date").eql("2023-01-15");
        res.body.should.have.property("expiry_date").eql("2027-01-15");
        res.body.should.have.property("price").eql("100000.00");
        res.body.should.have
          .property("image")
          .eql(
            "https://tse2.mm.bing.net/th?id=OIP.qqZbNpO2cTNv0LhiIhTPVgHaHa&pid=Api&P=0&h=180"
          );
        res.body.should.have
          .property("description")
          .eql("A high-performance laptop for professionals.");
        res.body.should.have.property("quantity").eql(10);
        res.body.should.have.property("asset_availability_status").eql("yes");
        res.body.should.have.property("created_at");
        res.body.should.have.property("updated_at");
        done();
      });
  });
});
