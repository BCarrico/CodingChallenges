// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

export function sumDigits(n: number): number {
    let split: string[] = String(n).replaceAll("-", "").split("")
    let newSplit: number[] = split.map(item => Number(item))
    let sum: number = 0
    for (let i = 0; i < split.length; i++){
      console.log(newSplit[i])
      
        sum += newSplit[i]
      
    }
    return sum
  }