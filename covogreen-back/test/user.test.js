//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('User', () => {

    describe('/GET test', () => {
        it('TEST', (done) => {
            chai.request(app)
            .get('/user/test')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/POST login', () => {
        it('should accept user', (done) => {
        chai.request(app)
            .post('/user/login')
            //.type("form")
            .send({
                'username' : 'rlembo',
                'password' : '098f6bcd4621d373cade4e832627b4f6',
            })
            .end((err, res) => {
                res.should.have.status(200);
                console.log('Resultat:', res.text);
                console.log('Type:', typeof res.text);
                expect(res).to.be.html;
                done();
            });
        });
    });

});