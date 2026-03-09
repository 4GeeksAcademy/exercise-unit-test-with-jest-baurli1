// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b;
};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
};

// Export the functions so tests can use them
module.exports = { sum, fromEuroToDollar };