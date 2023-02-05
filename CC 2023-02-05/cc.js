// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {
    let maxScore = 0
    let score = 0
    let noVowel = s.replace(/[aeiou]/gi, " ").split(" ").filter(item => item != "")
    for (let i = 0; i < noVowel.length; i++){
      let word = noVowel[i]
      score = 0
      for (let j = 0; j < word.length; j++)
        score += noVowel[i].charCodeAt(j) - 96
      if (score > maxScore){
        maxScore = score
      }
    }
    return maxScore
  };
  