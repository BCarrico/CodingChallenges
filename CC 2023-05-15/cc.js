// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.
function evenLast(numbers) {
    if (numbers.length < 1){
      return 0
    }
    let last = numbers[numbers.length - 1]
    let even = numbers.filter((item, index) => index % 2 === 0)
    let sum = even.reduce((a,b) => a + b, 0)
    return sum * last
  }
