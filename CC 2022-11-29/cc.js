// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let a = []
    let b = []
    let result = []
    let splitString = s.split("")
    
    for (let i = 0; i < 2; i++){
     
      if (i == 0){
        for (let i = 0; i < splitString.length; i++){
          if (i % 2 == 0){
            a.push(splitString[i].toUpperCase())
          } else {
            a.push(splitString[i].toLowerCase())
          }
        }
      } else {
        for (let i = 0; i < splitString.length; i++){
          if (i % 2 == 0){
            b.push(splitString[i].toLowerCase())
          } else {
            b.push(splitString[i].toUpperCase())
          }
      }
    }
    
  }
    result.push(a.join(""), b.join(""))
      return result};