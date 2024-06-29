// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3 print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
// exemple: "12Fizz4BuzzFizz78FizzBuzz...."

import { fizzBuzzProgram } from "./fizzBuzz";

describe('FizzBuzz Program', () => {
  it('should print the number', () => {
    expect(fizzBuzzProgram(2)).toEqual([1, 2]);
    expect(fizzBuzzProgram(3)).toEqual([1, 2, 'Fizz']);
    expect(fizzBuzzProgram(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    expect(fizzBuzzProgram(6)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz']);
    expect(fizzBuzzProgram(10)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
    expect(fizzBuzzProgram(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    expect(fizzBuzzProgram(30)).toEqual([
        1,      2,      'Fizz',
        4,      'Buzz', 'Fizz',
        7,      8,      'Fizz',
        'Buzz', 11,     'Fizz',
        13,     14,     'FizzBuzz',
        16,     17,     'Fizz',
        19,     'Buzz', 'Fizz',
        22,     23,     'Fizz',
        'Buzz', 26,     'Fizz',
        28,     29,     'FizzBuzz'
      ]);
  });
});
