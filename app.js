// Currency conversion values
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87   // british pound
};

// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b;
};

// Euro → Dollar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

// Dollar → Yen
const fromDollarToYen = function(valueInDollar) {
    let euros = valueInDollar / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};

// Yen → Pound
const fromYenToPound = function(valueInYen) {
    let euros = valueInYen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};

// Export all functions
module.exports = { 
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};