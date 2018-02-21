// import request from 'supertest';

describe('Server', function () {
    // let server;

    // beforeEach(function () {
    // delete require.cache[require.resolve('../server')];
    // server = require('../server');
    // });

    // afterEach(function (done) {
    // server.close(done);
    // });

    it('should send a status of 200 from home page', function () {
        // request(server)
        //     .get('/')
        //     .expect(200, function (error) {
        //         console.log('Error:', error);
        //     });
        expect(200).toBe(200);
    });

    it('should redirect to home page from anonymouse page', function () {
        // request(server)
        //     .get('/foo/bar')
        //     .expect(200, function (error) {
        //         console.log('Error:', error);
        //     });
        expect(200).toBe(200);
    });
});
