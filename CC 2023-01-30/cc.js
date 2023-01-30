// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
    let split = string.split("")
    let length = split.length
    for (let i = 0; i < length; i++){
      if (split[split.length-1] === '!'){
        split.pop()
      } else {
        return split.join("")
      }
    }
  }