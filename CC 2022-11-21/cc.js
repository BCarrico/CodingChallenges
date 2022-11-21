// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


function mxdiflg(a1, a2) {
    2
      if (a1.length == 0 || a2.length == 0){
    3
          return -1 } else {
    4
        let a1sort = a1.sort((a,b) => b.length - a.length)
    5
        let a2sort = a2.sort((a,b) => b.length - a.length)
    6
        let a1max = a1sort[0].length
    7
        let a2max = a2sort[0].length
    8
        let a1small = a1sort[a1.length-1].length
    9
        let a2small = a2sort[a2.length-1].length 
    10
        
    11
        let a2a1 = Math.abs(a2max - a1small)
    12
        let a1a2 = Math.abs(a1max - a2small)
    13
        
    14
        
    15
        if (a2a1 > a1a2){
    16
          return a2a1
    17
        } else {
    18
          return a1a2
    19
        }}
    20
    }
     