import { schema } from "./server"
import chai from 'chai';
const assert = chai.assert;


// Here is 1 client test
describe('my module', function () {
  it('does something that should be tested', function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode
    assert.isOk(schema, true);
  });
});
