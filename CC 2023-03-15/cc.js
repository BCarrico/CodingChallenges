// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    let result = ""
    
  for (let i = 0; i < x.length; i++){
    if (x[i] == 29){
      result += " "
    } else if (x[i] == 28){
      result += "?"  
    } else if (x[i] == 27){
      result += "!"
    } else{
  
   result += String.fromCharCode(26-x[i]+65)
    }
  }
  return result.toLowerCase()
  }