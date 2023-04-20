// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0
function longestPalindrome(s) {
    if (s.length === 0){
      return 0
    }
    
    let longest = 1
    let left, right
    
    for (let i = 0; i < s.length; i++){
      left = i
      right = i
      while (left >= 0 && right < s.length && s[left] === s[right]){
        longest = Math.max(longest, right - left + 1)
        left--
        right++
      }
      
      left = i
      right = i+1
        while (left >= 0 && right < s.length && s[left] === s[right]){
        longest = Math.max(longest, right - left + 1)
        left--
        right++
      }
    }
      return longest
    }
    
    
      
    
    
