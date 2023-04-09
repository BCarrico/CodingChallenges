// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
    if (arr.length < 1){
      return []
    } else if (arr.length < 2){
      return [arr[0]]
    } else {
      let filtered = arr.filter((item, index) => arr.indexOf(item) === index) 
      
      let sorted = filtered.sort((a,b)=>b-a)
      
      return [sorted[0], sorted[1]]
    }
    
   
  }