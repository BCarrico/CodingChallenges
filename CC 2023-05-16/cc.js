// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

function arrayLeaders(numbers){
    let result = []
  for (let i = 0; i < numbers.length; i++){
    let tempSum = [...numbers].splice(i+1).reduce((a,b) => a + b, 0)
    if (numbers[i] > tempSum){
      result.push(numbers[i])
    }
  } 
    return result
  }