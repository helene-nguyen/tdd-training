export const primeFactors = (a: number) => {
  // Create an empty list to store the prime factors.
  const primeFactorsList = [];

  // Start with the smallest possible prime number, which is 2.
  // While 'a' is greater than or equal to the candidate number:
  for (let candidate = 2; candidate <= a; candidate++)
    // Here,check if 'a' is divisible by the candidate number.
    // If it is, divide 'a' by the candidate and add the candidate to the list.
    for (; a % candidate === 0; a /= candidate) primeFactorsList.push(candidate);
  return primeFactorsList;
};


//--VERSION 2
// export const primeFactors = (n: number) => {
//   const primeFactorsList = [];

//   for (let candidate = 2; candidate <= n; candidate++) {
//     while (n % candidate === 0) {
//       primeFactorsList.push(candidate);
//       n /= candidate;
//     }
//   }

//   return primeFactorsList;
// };

//--VERSION 1
// export const primeFactors = (a: number) => {
//     const primeFactorsList = [];
//     let candidate = 2;

//     while (candidate <= a) {
//       while (a % candidate === 0) {
//         primeFactorsList.push(candidate);
//         // When used, we can remove it
//         a /= candidate;
//       }
//       candidate++;
//     }
//     return primeFactorsList;
//   };
