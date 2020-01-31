const assert = require('assert');
const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('supertest');
const path = require('path');

const app = require(path.join('..', 'app'));

describe('Unit tests for /status', function() {
    it('should return OK', function() {
        return request(app)
            .get('/status')
            .then(function(res){
                assert.equal(res.status, 200);
            });
    });
    it('should contain desc, version, lastcommitsha', function() {
        return request(app)
            .get('/status')
            .then(function(res){
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('version');
                expect(res.body).to.have.property('description');
                expect(res.body).to.have.property('lastcommitsha');
            });
    });
});
