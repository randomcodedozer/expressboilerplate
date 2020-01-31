const assert = require('assert');
const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('supertest');
const path = require('path');

const app = require(path.join('..', 'app'));

describe('Unit tests for /', function() {
    it('should return OK', function() {
        return request(app)
            .get('/')
            .then(function(res){
                assert.equal(res.status, 200);
            });
    });
    it('should greet world', function() {
        return request(app)
            .get('/')
            .then(function(res){
                expect(res.text).to.contain('Hello World');
            });
    });
});
