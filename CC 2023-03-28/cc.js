// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    let vowels = ["a", "e", "i", "o", "u"]
    let split = string.split('')
    let result = []
   for (let i = 0; i < split.length; i++){
     if (vowels.includes(split[i])){
       
       let getPushed = split[i].toUpperCase()
       result.push(getPushed)
       
     } else {
       result.push(split[i])
     }
     
   }
    return result.join("")
  }