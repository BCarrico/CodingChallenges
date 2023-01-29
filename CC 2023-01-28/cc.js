// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let blankSpace = " "
    
    let starsCount = 1
    let stars = "*"
    let result = []
    for (let i = 1; i <= nFloors; i++){
      let blankCount = nFloors - i
      if (nFloors === 1){
        result.push("*")
      } else if (i == nFloors){
        blankCount = 0
        result.push(`${stars.repeat(starsCount)}`)
      } else {
        result.push(`${blankSpace.repeat(blankCount)}${stars.repeat(starsCount)}${blankSpace.repeat(blankCount)}`)
        starsCount += 2
      }
      
      
    }
    return result
  }