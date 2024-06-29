import { handleAddition } from './addition';
//--Test case
//--Write a function which takes two numbers and returns their sum

//--Restate the problem => implement an addition
//--Inputs => Int? Float? String? And if empty?
//--Outputs => Int? Float? String?
//--Details => And if only one number is passed? Do I have enough informations?
//--Important pieces =>

describe('Make an addition', () => {
  it('Should return the sum of two numbers', () => {
    expect(handleAddition(1, 2)).toEqual(3);
    expect(handleAddition(1.5, 2.5)).toEqual(4);
    expect(handleAddition("a", 5)).toEqual("Impossible");
  });
});
