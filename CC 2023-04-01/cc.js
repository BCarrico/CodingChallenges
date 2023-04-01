// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
    let split = str.split('')
  
    for (let i = 1; i < split.length-1; i++){
      if (split[i-1] === "7" && split[i] === "9" && split[i+1] === '7'){
        split.splice(i, 1)
      }
    }
    return split.join('')
  }