// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

function meeting(s) {
    let answer = []
    let split = s.toUpperCase().split(";")
    for (let i = 0; i < split.length; i++){
      let temp = split[i].split(":")
      answer.push(`(${temp[1]}, ${temp[0]})`)
    }
    return answer.sort().join("")
  }