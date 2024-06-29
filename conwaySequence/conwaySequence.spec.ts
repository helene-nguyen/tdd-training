// Write a program to print a specific line of the Conway sequence.
// The first term of the sequence is 1.
// The second term of the sequence is 1.
// For any other term, the value is determined by taking the value of the previous term as an index and summing the values of the terms at that index and at the index given by subtracting the previous term from the current term.
// The task is to write a program that generates the Newman-Conway sequence of a given size.
// Look and say program

import { newmanConwaySequence } from './conwaySequence';

describe('Conway Sequence', () => {
  it('should return Newman-Conway sequence', () => {
    // expect(newmanConwaySequence(1)).toEqual(["1"]);
    // expect(newmanConwaySequence(2)).toEqual(["1", "11"]);
    // expect(newmanConwaySequence(3)).toEqual(["1", "11", "21"]);
    // expect(newmanConwaySequence(1, 1)).toEqual([1]);
    // expect(newmanConwaySequence(1, 2)).toEqual([1, 1]);
    // expect(newmanConwaySequence(1, 3)).toEqual([2, 1]);
    // expect(newmanConwaySequence(1, 4)).toEqual([1, 2, 1, 1]);
    // expect(newmanConwaySequence(1, 5)).toEqual([1, 1, 1, 2, 2, 1]);
    // expect(newmanConwaySequence(1, 6)).toEqual([3, 1, 2, 2, 1, 1]);
    // expect(newmanConwaySequence(1, 7)).toEqual([1, 3, 1, 1, 2, 2, 2, 1]);
    // expect(newmanConwaySequence(3, 1)).toEqual([3]);
    // expect(newmanConwaySequence(3, 2)).toEqual([1, 3]);
  });
});
