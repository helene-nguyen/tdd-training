export const matrixSpiral = (n: number) => {
  // Initialize the array
  let result: Array<any> = [];

  if (n <= 2) {
    result = new Array(n).fill(undefined).map(() => new Array(n).fill(undefined));
    return result;
  }

  // Initialize the matrix and fill with 0
  result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // Start positions
  let row = 0;
  let col = 0;

  // Define directions: right, down, left, up
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  // Start with moving right
  let dir = 0;

  for (let index = 1; index <= n * n; index++) {
    // Assign the current number to the matrix
    result[row][col] = index;

    // Calculate next row and column
    let nextRow = row + directions[dir][0];
    let nextCol = col + directions[dir][1];

    // Check if the next position is out of bounds or already filled
    if (nextRow < 0) {
      // Change direction
      dir = (dir + 1) % 4; // cycle through 0, 1, 2, 3
      nextRow = row + directions[dir][0];
      nextCol = col + directions[dir][1];
    }

    if (nextRow >= n) {
      // Change direction
      dir = (dir + 1) % 4; // cycle through 0, 1, 2, 3
      nextRow = row + directions[dir][0];
      nextCol = col + directions[dir][1];
    }

    if (nextCol < 0) {
      // Change direction
      dir = (dir + 1) % 4; // cycle through 0, 1, 2, 3
      nextRow = row + directions[dir][0];
      nextCol = col + directions[dir][1];
    }

    if (nextCol >= n) {
      // Change direction
      dir = (dir + 1) % 4; // cycle through 0, 1, 2, 3
      nextRow = row + directions[dir][0];
      nextCol = col + directions[dir][1];
    }

    if (result[nextRow][nextCol] !== 0) {
      // Change direction
      dir = (dir + 1) % 4; // cycle through 0, 1, 2, 3
      nextRow = row + directions[dir][0];
      nextCol = col + directions[dir][1];
    }

    // Move to the next position
    row = nextRow;
    col = nextCol;
  }
  console.log(result);

  return result;
};

// STEP 1

// export const matrixSpiral = (n: number) => {
//   // Initialize the array
//   let result = [];

//   result = new Array(n).fill(undefined).map(() => new Array(n).fill(undefined));

//   return result;
// };
