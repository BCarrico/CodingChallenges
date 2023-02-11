// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    let map = {}
    
    if (string.length === 0){
      return {}
    } else {
      let split = string.split("")
      let elementCounts = split.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
  
  return elementCounts
    }}