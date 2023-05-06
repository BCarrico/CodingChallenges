// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language)

function validSpacing(s) {
    if (s[0] === " " || s[s.length-1] === " "){
      return false
    } 
    
       // Check for double spaces
     if (s.includes('  ')) {
       return false;
     }
   
     // Check for any remaining spaces
     if (s.includes(' ')) {
       return true;
     }
   
     // If no spaces are left, the string is valid
     return true;
   }