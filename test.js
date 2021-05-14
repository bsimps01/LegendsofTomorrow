const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')

const server = require('./index.js')

chai.use(chaiHttp)

describe('Test Routes for Legends of Tomorrow', () => {
    it('returns 3000', (done) => {

    })
    it('get the legends', (done) => {

    })
    it('add legend to db', (done) => {

    })
})