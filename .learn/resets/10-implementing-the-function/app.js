// Currency conversion rates
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Euro to Dollar
const fromEuroToDollar = function(euro) {
    return euro * oneEuroIs.USD;
};

// Dollar to Yen
const fromDollarToYen = function(dollar) {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
};

// Yen to Pound
const fromYenToPound = function(yen) {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };