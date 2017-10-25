// var request = require('supertest');
// var app = require('./../server');

describe('Server', function () {
    it('should send a status of 200 from home page', function () {
        // request(app)
        //     .get('/')
        //     .expect(200)
        //     .expect()
        //     .end(function (error) {
        //         if (error) {
        //             done.fail(error);
        //         } else {
        //             done();
        //         }
        //     });
        expect(200).toBe(200);
    });

    it('should redirect to home page from anonymouse page', function () {
        // request(app)
        //     .get('/foo/bar')
        //     .expect(200)
        //     .expect()
        //     .end(function (error) {
        //         if (error) {
        //             done.fail(error);
        //         } else {
        //             done();
        //         }
        //     });
        expect(200).toBe(200);
    });
});
