// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let string = ""
    if (num === 0){
      return string
    } else {
    for (let i = 0; i < num; i++) {
      string += `${(i+1)} sheep...`
    }
    }
    return string
  }