// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight)
{
   let string = fight.split("")
   let right = string.filter(item => ["m", "q", "d", "z"].includes(item))
   let left = string.filter(item => ["w", "p", "b", "s"].includes(item))
   let rightTotal = 0
   let leftTotal = 0
   
   for (let i = 0; i < right.length; i++){
      if (right[i] === "m"){
      rightTotal += 4 
     } else if (right[i] === "q"){
       rightTotal += 3
     } else if (right[i] === "d"){
       rightTotal +=2
     } else if (right[i] === "z"){
       rightTotal += 1
     }}
     for (let i = 0; i < left.length; i++){
      if (left[i] === "w"){
      leftTotal += 4 
     } else if (left[i] === "p"){
       leftTotal += 3
     } else if (left[i] === "b"){
       leftTotal +=2
     } else if (left[i] === "s"){
       leftTotal += 1
     }
   }
console.log(left, right)
if (leftTotal > rightTotal){
  return "Left side wins!"
} else if (rightTotal > leftTotal){
  return "Right side wins!"
} else {
  return "Let's fight again!"
}
}