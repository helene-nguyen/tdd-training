//---- NEW ----//
export const newmanConwaySequence = (baseNumber:number, range: number): Number[] => {
  let output: Number[] = [baseNumber];

  for (let index = 1; index < range; index++) {
    let current: Number[] = output;
    let tempResult: Number[] = [];
    let frequence = 1;

    for (let value = 1; value < current.length; value++) {
      if (current[value] === current[value - 1]) {
        // console.log('ADD FREQUENCE');
        frequence++;
      } else {
        // console.log("DON'T ADD FREQUENCE");
        tempResult.push(frequence);
        tempResult.push(current[value - 1]);

        frequence = 1;
      }
    }
    // console.log('CURRENT AFTER 2nd lOOPING', current);
    // console.log('CURRENT AFTER', current[current.length - 1]);

    tempResult.push(frequence);
    tempResult.push(current[current.length - 1]);

    // console.log('tempResult', tempResult);

    output = tempResult;
  }
  return output;
};

// export const newmanConwaySequence = (range: number) => {
//   let output = ['1'];

//   for (let index = 1; index < range; index++) {
//     let current = output[index - 1];
//     let tempResult = '';
//     let count = 1;

//     for (let value = 1; value < current.length; value++) {
//       if (current[value] === current[value - 1]) {
//         count++;
//       } else {
//         tempResult += count.toString() + current[value - 1];

//         count = 1;
//       }
//     }

//     tempResult += count.toString() + current[current.length - 1];
//     console.log('TEMP RESULT', tempResult);
//     // tempResult = tempResult.slice(-1);
//     const result = tempResult.split('');
//     console.log(result);

//     output.push(tempResult);
//     // output = result;
//   }

//   return output;
// };

// export const newmanConwaySequence = (range: number) => {
//   let baseSequence: number[] = [1];

//   for (let index = 0; index < range; index++) {
//     console.log("ROUND:", index);
//     let frequence = 0;
//     let lastNumber = baseSequence[0];
//     let sequenceOutput: number[] = [];

//     if (range === 1) {
//       // Step 1 => Define the first range
//       return baseSequence;
//     }

//     console.log('LAST NUMBER OF PREVIOUS SEQUENCE = ', lastNumber);
//     console.log('SEQUENCE TO LOOP = ', baseSequence);
//     console.log('CURRENT SEQUENCE = ', sequenceOutput);

//     baseSequence?.forEach((value) => {
//       console.log('CURRENT FREQUENCE = ', frequence);
//       if (value === lastNumber) {
//         frequence++;
//         console.log('ADD FREQUENCE = ', frequence);
//       } else {
//         sequenceOutput.push(lastNumber);
//         sequenceOutput.push(frequence);
//         lastNumber = value;
//         frequence = 1;
//       }
//     });

//     sequenceOutput.push(lastNumber);
//     sequenceOutput.push(frequence);
//     baseSequence = sequenceOutput;

//     console.log('SEQUENCE TO NORMALLY LOOP = ', sequenceOutput);
//     // return sequenceOutput;
//   }

//   console.log('FINAL VALUE', baseSequence);
// };

//~ STEP 3
// export const newmanConwaySequence = (range: number) => {
//   let sequence: number[] = [];
//   let lastNumber = sequence[0];
//   let frequence = 1;

//   for (let index = 0; index < range; index++) {
//     sequence?.forEach((value) => {
//       console.log('range = ', range);
//       console.log('value = ', value);
//       console.log('frequence = ', frequence);
//       console.log('last number = ', lastNumber);

//       if (lastNumber === value) {
//         console.log('Last Number equal current value ', value);
//         sequence[0] = frequence
//         frequence++;

//       } else {
//         sequence.push(frequence);
//         console.log('__________frequence____________ = ', frequence);
//         lastNumber = value;
//         frequence = 1;
//       }
//     });
//     if (sequence.length === 0) sequence.push(frequence);
//   }

//   return sequence;
// };

//~ STEP 2
// export const newmanConwaySequence = (range: number) => {
//   const sequence: number[] = [];
//   let lastNumber = sequence[0];
//   let frequence = 0;

//   for (let index = 0; index < range; index++) {
//     if (lastNumber) {
//     } else {
//       frequence = 1;
//       sequence.push(frequence);
//     }
//   }
//   return sequence;
// };

//~ STEP 1
// export const newmanConwaySequence = (range: number) => {
//   const sequence: number[] = [];
//   let lastNumber = sequence[0];
//   let frequence = 0;

//   for (let index = 0; index < range; index++) {
//     frequence++;
//     sequence.push(frequence);
//   }
//   return sequence;
// };

//--------------------------------------------------------------

// STEP 2
// export const newmanConwaySequence = (range: number) => {
//   const sequence: number[] = [];

//   if (range > 0) {
//     for (let index = 0; index < range; index++) {
//       sequence.push(1);
//     }
//   }

//   return sequence;
// };

// STEP 1
// Test passing
// export const newmanConwaySequence = (range: number) => {
//   const sequence: number[] = [];

//   return sequence;
// };

//---- OLD ----//
//STEP 4
// export const newmanConwaySequence = (range: number) => {
//   const sequence: number[] = [];

//   for (let targetId = 0; targetId < range; targetId++) {
//     if (sequence.length >= 2) {
//       return sequence.map((n, i) => (sequence[i] === sequence[i + 1] ? n + 1 : n));
//     } else sequence.push(1);
//     // if (targetId < 2) sequence.unshift(1);
//     // if (range === 3) {
//     //   if (sequence[0] === sequence[targetId - targetId + 1]) sequence[targetId - targetId] = sequence[1] + 1;
//     // }
//     // if (range === 4) {
//     //   console.log(sequence);

//     // }
//   }
//   return sequence;
// };

//STEP 3
// export const newmanConwaySequence = (range: number) => {
//   const sequence = [];

//   for (let targetId = 0; targetId < range; targetId++) {
//     if (targetId < 2) sequence.unshift(1);
//     if (range === 3) {
//       if (sequence[0] === sequence[targetId - targetId + 1]) sequence[targetId - targetId] = sequence[1] + 1;
//     }
//   }
//   return sequence;
// };

//STEP 2
// export const newmanConwaySequence = (range: number) => {
//   const sequence = [];

//   for (let targetId = 0; targetId < range; targetId++) {
//     sequence.push(1);
//   }

//   return sequence;
// };

// STEP 1
// export const newmanConwaySequence = (range: number) => {
//   let output = [];

//   for (let index = 0; index < range; index++) {
//     output.push(1);
//   }

//   return output;
// };

// output
// [
// [1],
// [1, 1],
// [2, 1]
// ]