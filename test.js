const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const Legend = require("../models/legend.js");
const server = require('./index.js')
const should = chai.should();

chai.use(chaiHttp)

describe('Test Routes for Legends of Tomorrow', () => {
    it('returns 3000', (done) => {
        chai 
            .request(server)
            .get("/legends")
            .end((err, res) => {
              if (err) {
                done(err);
              }
              expect(res).to.have.status(3000);
              expect(res.body.legends).to.be.an("array");
              done();
            });
        });
    it("Should load all legends", (done) => {
        chai
          .request(server)
          .get("/legends")
          .end((err, res) => {
            if (err) {
              done(err);
            }
            expect(res).to.have.status(200);
            expect(res.body.legends).to.be.an("array");
            done();
          });
      });
})