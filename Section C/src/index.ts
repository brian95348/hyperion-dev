const inputPrompt = require('prompt-sync')({ sigint: true });

interface GenericObj {
    [key: number]: string
}

const NUMBER_WORDS: GenericObj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};

const QUALIFIERS: GenericObj = {
    1000000000000:  " trillion, ",
    1000000000: " billion, ",
    1000000: " million, ",
    1000: " thousand, ",
    100: " hundred, "
}

// generate unformatted string using recursion
const generateStringAnswer = (n: number): string => {
    const values = [1000000000000, 1000000000, 1000000, 1000, 100]
    let text = "";

    // handle edge cases
    if (typeof n !== 'number') {
        return "Invalid input: Only numbers are allowed as input";
    } else if (!Number.isInteger(n)) {
        return "Invalid input: Only integers are allowed as input";
    } else if (n < 0 || n > 999999999999999) {
        return "Invalid Input: Number out of range, supported range is 0 <= x <= 999,999,999,999,999";
    } else if (n in NUMBER_WORDS) {
        return NUMBER_WORDS[n as keyof GenericObj];
    } else {
        values.forEach(val => {
            if ((n/val) >= 1) {
                let qualifier = QUALIFIERS[val as keyof GenericObj] 
                text += generateStringAnswer(Math.floor(n / val)) + qualifier;
                n %= val
            }
        })
        // handle values less than 100
        if (n > 0) {
            if (text !== "") {
                text = text.slice(0,text.lastIndexOf(',')) + " and ";
            }
            if (n in NUMBER_WORDS) {
                text += NUMBER_WORDS[n];
            } else {
                text += NUMBER_WORDS[Math.floor(n / 10) * 10] + "-";
                text += NUMBER_WORDS[n % 10];
            }
        }
        return text.trim()
    }  
}

export const sayNumber = (num: number) => {
    const string = generateStringAnswer(num)
    // check if returned string ends with a comma, if so remove it, else capitalise string and add fullstop
    const formattedString = string.charAt(0).toUpperCase() + (string.charAt(string.length-1) === ',' ?
                            string.slice(1, -1) : string.slice(1)) + '.';
    return formattedString
}

while (true) {
    const num = inputPrompt('Enter a number: ');
    console.log(sayNumber(Number(num)));
}
