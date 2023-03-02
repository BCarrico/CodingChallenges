// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    let result = ""
   for (let i = 0; i < s.length; i++){
     if (s[i].toUpperCase() === s[i]){
       result += s[i].toLowerCase()
     } else {
       result  += s[i].toUpperCase()
     }
   }
    return result
  }