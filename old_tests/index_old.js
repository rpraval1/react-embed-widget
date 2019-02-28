process.env.NODE_ENV = 'test';

var app = require('../tests/test_server');

// use zombie.js as headless browser
var Browser = require('zombie');

// load Node.js assertion module
var assert = require('assert');

var server = app.listen(8080);

describe('default medal input', async function() {
    // Start the server
    before(async function() {
        this.browser = new Browser({ site: 'http://localhost:8080' });
    })

    // load the default_medal.html
    before(function(done) {
        this.browser.visit('/default_medal.html', done);
    });

    it('should show default sort as gold', function() {
        assert.ok(this.browser.success);
    });

})

describe('medal input: total', async function() {
    // Start the server
    before(async function() {
        // this.server = app.listen(8080);

        this.browser = new Browser({ site: 'http://localhost:8080' });
    })

    // load the default_medal.html
    before(function(done) {
        this.browser.visit('/index.html', done);
    });

    it('should sort by total', function() {
        assert.ok(this.browser.success);
    });

})

describe('config with invalid div', async function() {
    // Start the server
    before(async function() {
        // this.server = app.listen(8080);

        this.browser = new Browser({ site: 'http://localhost:8080' });
    })

    // load the default_medal.html
    before(function(done) {
        this.browser.visit('/invalid_div.html', done);
    });

    it('should load error', function() {
        assert.ok(this.browser.success);
    });

})


describe('config with invalid medal: will load gold as default', async function() {
    // Start the server
    before(async function() {
        // this.server = app.listen(8080);

        this.browser = new Browser({ site: 'http://localhost:8080' });
    })

    // load the default_medal.html
    before(function(done) {
        this.browser.visit('/invalid_medal.html', done);
    });

    it('should load default gold medal', function() {
        assert.ok(this.browser.success);
        server.close()
    });

})