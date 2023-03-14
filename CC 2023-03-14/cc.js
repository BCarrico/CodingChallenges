// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s){
    let count = 0
    let max = 0
    let vowels = ["i", "e", "a", "o", "u"]
    for (let i = 0; i < s.length; i++){
      if (vowels.includes(s[i])){
        count += 1
        if (count > max){
          max = count
        }
      } else {
        count = 0
      }
    }
     return max
   }