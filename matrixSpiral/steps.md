# Matrix Spiral TDD steps

## Step 1

```js
export const matrixSpiral = (matrixNumber: number) => {
  let output: any = [];
  for (let index = 0; index < matrixNumber; index++) {
    let tempResult = [];

    for (let index = 0; index < matrixNumber; index++) {
      tempResult.push(undefined);
    }
    output.push(tempResult);

    console.log('OUTPUT END FIRST LOOP', output);
  }

  return output;
};
```
