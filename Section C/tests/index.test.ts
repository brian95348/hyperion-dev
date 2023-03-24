/// <reference types="@types/jest" />;

import { sayNumber } from '../src/index'

describe('testing for incorrect input', () => {
    test('input which is not a number should return an error message', () => {
      expect(sayNumber(200.5)).toContain('Invalid input: Only integers are allowed as input');
    });

    test('number below range should return an error message', () => {
        expect(sayNumber(-9)).toContain("Invalid Input: Number out of range, supported range is 0 <= x <= 999,999,999,999,999");
      });

    test('number above range should return an error message', () => {
        expect(sayNumber(1999999999999999)).toContain("Invalid Input: Number out of range, supported range is 0 <= x <= 999,999,999,999,999");
      });
});

describe('testing for correct input', () => {
    test('integer input should return a string', () => {
        expect(sayNumber(1043283)).toBe('One million, forty-three thousand, two hundred and eighty-three.');
    });

    test('integer input should return a string', () => {
        expect(sayNumber(0)).toBe('Zero.');
    });

    test('integer input should return a string', () => {
      expect(sayNumber(90376000010012)).toBe('Ninety trillion, three hundred and seventy-six billion, ten thousand and twelve.');
  });
});