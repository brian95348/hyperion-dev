var inputPrompt = require('prompt-sync')();
var NUMBER_WORDS = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety"
};
function numberToText(n) {
    if (n < 0 || n > 999999999999999) {
        throw new Error("Number out of range");
    }
    else if (n in NUMBER_WORDS) {
        return NUMBER_WORDS[n];
    }
    var text = "";
    if (n >= 1000000000000) {
        text += numberToText(Math.floor(n / 1000000000000)) + " Trillion ";
        n %= 1000000000000;
    }
    else if (n >= 1000000000) {
        text += numberToText(Math.floor(n / 1000000000)) + " Billion ";
        n %= 1000000000;
    }
    else if (n >= 1000000) {
        text += numberToText(Math.floor(n / 1000000)) + " Million ";
        n %= 1000000;
    }
    else if (n >= 1000) {
        text += numberToText(Math.floor(n / 1000)) + " Thousand ";
        n %= 1000;
    }
    else if (n >= 100) {
        text += numberToText(Math.floor(n / 100)) + " Hundred ";
        n %= 100;
    }
    else if (n > 0) {
        if (text !== "") {
            text += "and ";
        }
        if (n in NUMBER_WORDS) {
            text += NUMBER_WORDS[n];
        }
        else {
            text += NUMBER_WORDS[(Math.floor(n / 10) * 10)] + " ";
            text += NUMBER_WORDS[(n % 10)];
        }
    }
    return text.trim();
}
var num = inputPrompt('Enter a number: ');
console.log(numberToText(Number(num)));
