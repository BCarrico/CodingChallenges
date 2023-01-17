// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    let split = string.split("")
    for (let i = 0; i < split.length; i++){
      if (split[i] === "a"){
        split.splice(i, 1, 1)
      } else if (split[i] === "e"){
        split.splice(i, 1, 2)
      } else if (split[i] === "i"){
        split.splice(i, 1, 3)
      } else if (split[i] === "o"){
        split.splice(i, 1, 4)
      } else if (split[i] === "u"){
        split.splice(i, 1, 5)
      }
    }
    return split.join("")
   }
   
   function decode(string) {
     let split = string.split("")
    for (let i = 0; i < split.length; i++){
      if (split[i] === '1'){
        split.splice(i, 1, 'a')
      } else if (split[i] === '2'){
        split.splice(i, 1, 'e')
      } else if (split[i] === '3'){
        split.splice(i, 1, 'i')
      } else if (split[i] === '4'){
        split.splice(i, 1, 'o')
      } else if (split[i] === '5'){
        split.splice(i, 1, 'u')
      }
    }
    return split.join("")
   }