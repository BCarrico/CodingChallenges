// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

// Example
// For start = 125, and end = 132

// The letterboxes are

// 125 = 1, 2, 5
// 126 = 1, 2, 6
// 127 = 1, 2, 7
// 128 = 1, 2, 8
// 129 = 1, 2, 9
// 130 = 1, 3, 0
// 131 = 1, 3, 1
// 132 = 1, 3, 2
// The digit frequencies are:

// 0 is painted 1 time
// 1 is painted 9 times
// 2 is painted 6 times
// etc...
// and so the method would return [1,9,6,3,0,1,1,1,1,1]

// Notes
// 0 < start <= end
// In C, the returned value will be free'd.
var paintLetterboxes = function(start, end) {
    const frequencies = [0,0,0,0,0,0,0,0,0,0]
    for (let i = start; i <= end; i++ ){
      let digits = i.toString().split('')
      digits.forEach(digit => frequencies[digit]++)
    }
    return frequencies
  }
  
