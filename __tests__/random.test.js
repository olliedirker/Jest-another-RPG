
const randomNumber = require('../lib/random.js');

test('checks if 10 is eaqual to 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});