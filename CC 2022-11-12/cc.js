// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	let arr = word.split("")
  let result = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i].toUpperCase() === arr[i]){
      result.push(i)
    }
  }
  return result
};