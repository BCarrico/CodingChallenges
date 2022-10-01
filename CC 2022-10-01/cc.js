// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let average = ((s1 + s2 + s3) / 3)
    if (average <= 100 && average >= 90){
      return 'A'
    } else if (average >= 80 && average < 90){
      return 'B'
    } else if (average >= 70 && average < 80){
      return 'C'
    } else if (average >= 60 && average < 70){
      return 'D'
    } else {
      return 'F'
    }
  }

//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let splitArray = numbers.split(' ')
    
    return `${Math.max(...splitArray)} ${Math.min(...splitArray)}`
  }