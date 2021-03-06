// ASSESSMENT 3: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe ("fibonacciArray", () => {
    it ("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
      const input1 = 6
      const input2 = 10
      expect(fibonacciArray(input1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciArray(input2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

// Succesful failure 
// ● fibonnaciArray › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//     ReferenceError: fibonnaciArray is not defined

// b) Create the function that makes the test pass.
// Pseudo Code 
// create a function : fibonacciArray
// input will be a number greater than 2 (6, 10)
// Output needs to be an array containing the numbers of the fibonacci series
// use for loop to iterate 
// create a variable with an array of two values for us to use as our starting point 
// will need to use .push to add previous value with new value


const fibonacciArray = (number) => {
    let var1 = [1,1];
    for (let i = 2; i < number; i++) {
      var1.push(var1[i-1] + var1[i-2]);
    }
    return var1
}


// PASS  ./code-challenges.test.js
//   fibonaciArray
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.


describe ("oddNumbers", () => {
    it ("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
      expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23])
    })
  })

// Succesful failure 
// ● oddNumbers › takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// ReferenceError: oddNumbers is not defined


// b) Create the function that makes the test pass.
// Pesudo Code 
// create a function: oddNumbers 
// input: array given 
// returns a new array with only odd numbers sorted from least to greatest 
// will need to use .filter() along with the modulo operator % to return a new array with only odd values
// our returned odd values need to be only numbers by using typeof and need to be ordered from least to greatest -->use .sort()


const oddNumbers = (array) => { 
  return array.filter(value => value % 2 !== 0 && typeof value === 'number').sort((a, b) => a-b) 
}


        
        // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.



describe ("cumulativeSum", () => {
    it ("takes in an array and returns an array of the accumulating sum", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd3 = []
      expect(cumulativeSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(cumulativeSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(cumulativeSum(numbersToAdd3)).toEqual([])
    })
  })

// Successful Failure 
// cumulativeSum › takes in an array and returns an array of the accumulating sum

// ReferenceError: cumulativeSum is not defined

// b) Create the function that makes the test pass.
// Pseudo Code
// create a function : cumulativeSum
// takes in an array : numbersToAdd1, numbersToAdd2, numebersToAdd3 
// returns an array of the accumulating sum
// according to google, use .reduce() to get an array of the function's accumulated result --> syntax array.reduce(function(total, currentValue, currentIndex, arr), initialValue)



const cumulativeSum = array => {
    const numbers = array.reduce((value1, value2) => {
       let { sum, res } = value1;
       sum += value2;
       res.push(sum);
       return { sum, res };
    }, {
       sum: 0,
       res: []
    });
    return numbers.res;
 };
 