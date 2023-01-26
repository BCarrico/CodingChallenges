// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    let split = text.split(" ")
    
    for (let i = 0; i < split.length; i++){
      if (split[i].length < 2) {
        split[i] = split[i].charCodeAt(0) + split[i].substr(1, split[i].length)
        
    }  else if (split[i].length < 3) {
       let front = split[i].charCodeAt(0)
       let end = split[i].substring(1)
   
        let swapResult = front+end
        split[i] = swapResult
    
    } else {
      
      let front = split[i].charCodeAt(0)
      let toEnd = split[i].substring(1, 2)
      let mid = split[i].substring(2, split[i].length - 1)
      let toSecond = split[i].substring(split[i].length - 1)
      let swapResult = front+toSecond+mid+toEnd
      split[i] = swapResult
      
    }
  }
  
  return split.join(' ')
  
  }