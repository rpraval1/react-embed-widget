process.env.NODE_ENV = 'test';

var app = require('./test_server');

var server = app.listen(3002);

import { Selector } from 'testcafe';

fixture `Passing total as sort type`
    .page `http://localhost:3002/index.html`;


test('Should return TOTAL', async t => {

    const selectedHeader = await Selector('.selected').find('div');

    // Use the assertion to check if innerText is TOTAL
    await t.expect(await selectedHeader.innerText).eql('TOTAL');
});


fixture `Not Passing sort type should default to gold`
    .page `http://localhost:3002/default_medal.html`;


test('Should sort by gold', async t => {

    const selectedHeader = await Selector('.selected');

    // Use the assertion to check if the attribute data-medal-type is gold
    await t.expect(await selectedHeader.child('.yellow').getAttribute('data-medal-type')).eql('gold');
});


fixture `Not passing valid div id while widget initialization`
    .page `http://localhost:3002/invalid_div.html`

test('Should throw an error', async t => {
    const { error } = await t.getBrowserConsoleMessages();

    console.log("Error message in console: " + error[0])

    // Use the assertion to check if the error message printed on the console contains the word - FAILED
    await t.expect(error[0]).contains('FAILED')
});


fixture `Not passing valid medal sort type while widget initialization`
    .page `http://localhost:3002/invalid_medal.html`

test('Should load default sort type as gold', async t => {
    const selectedHeader = await Selector('.selected');

    // Use the assertion to check if the attribute data-medal-type is gold
    await t.expect(await selectedHeader.child('.yellow').getAttribute('data-medal-type')).eql('gold');
});


fixture `Test for IE`
    .page `http://localhost:3002/ie_index.html`

test('Should sort by TOTAL', async t => {
    const selectedHeader = await Selector('.selected').find('div');

    // Use the assertion to check if innerText is TOTAL
    await t.expect(await selectedHeader.innerText).eql('TOTAL');
    server.close()
});