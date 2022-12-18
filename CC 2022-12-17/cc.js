// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let max = array[0]*array[1]
    for (let i = 1; i < array.length; i++){
      if (array[i-1]*array[i] > max){
        max = array[i-1]*array[i]
      }
    }
    return max
  }