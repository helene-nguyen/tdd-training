import { primeFactors } from './main.ts';

//~ Test
describe('Prime factors', () => {
  it('should list prime factor', () => {
    expect(primeFactors(2)).toEqual([2]);
    expect(primeFactors(3)).toEqual([3]);
    expect(primeFactors(4)).toEqual([2, 2]);
    expect(primeFactors(8)).toEqual([2, 2, 2]);
    expect(primeFactors(9)).toEqual([3, 3]);
    expect(primeFactors(9524)).toEqual([2, 2, 2381]);
  });
});
