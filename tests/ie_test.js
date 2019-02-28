process.env.NODE_ENV = 'test';

var app = require('./test_server');

var server = app.listen(3002);

import { Selector } from 'testcafe';

fixture `Test for IE`
    .page `http://localhost:3002/ie_index.html`

test('Should sort by TOTAL', async t => {
    const selectedHeader = await Selector('.selected').find('div');

    // Use the assertion to check if innerText is TOTAL
    await t.expect(await selectedHeader.innerText).eql('TOTAL');
    server.close()
});