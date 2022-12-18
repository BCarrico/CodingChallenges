// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let array = str.split(" ")
    let reverse = []
    for (let i = 0; i < array.length; i++){
      reverse.push(array[i].split("").reverse().join(""))
    }
     return reverse.join(" ")
   }  