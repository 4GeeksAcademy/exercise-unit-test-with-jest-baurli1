// Import the functions from app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test for the sum function
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Test for euro to dollar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected);
});

// Test for dollar to yen
test("One dollar should be converted to yen correctly", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;

    expect(yen).toBe(expected);
});

// Test for yen to pound
test("One yen should be converted to pound correctly", function() {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;

    expect(pounds).toBe(expected);
});