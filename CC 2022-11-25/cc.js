// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let splitString =  string.split("")
    let result = ""
    for (let i = 0; i < splitString.length; i++){
      if (splitString[i] === splitString[i].toLowerCase()){
        result = result + splitString[i]
      } else {
        result = result + ` ${splitString[i]}`
      }
    }
    return result
  }
  