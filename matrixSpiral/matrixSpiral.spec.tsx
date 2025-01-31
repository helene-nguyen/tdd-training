// Write a function that accepts an integer N and returns a NxN spiral matrix
// Examples:
// matrix(2);
//     [[undefined, undefined],
//      [undefined, undefined]]

// matrix(3);
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]

// matrix(4);
//     [[1,   2,  3, 4],
//      [12, 13, 14, 5],
//      [11, 16, 15, 6],
//      [10,  9,  8, 7]]
import { matrixSpiral } from './matrixSpiral';

describe('Matrix Spiral', () => {
  it('should return Matrix spiral', () => {
    expect(matrixSpiral(2)).toEqual([
      [undefined, undefined],
      [undefined, undefined]
    ]);

    expect(matrixSpiral(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]);
  });
});
