// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

function tidyNumber(n){
    let split = String(n).split("")
    for (let i = 0; i < split.length; i++){
      if (split[i] > split[i+1]){
        console.log(split[i], split[i+1])
        return false
      }
    }
    return true
  }