// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

function largest(n, array) {
    let sorted = array.sort((a,b)=>b-a)
    let result = []
    for (let i = 0; i < n; i++){
      result.unshift(sorted[i])
    }
    return result;
  }