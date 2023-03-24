// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    // replace all non-letter and non-digit characters with ''
    str = str.replace(/\d+/g, "");
    // insert a '-' before any uppercase letter
    str = str.replace(/([A-Z])/g, '-$1').toLowerCase();
    // remove any leading '-'
    if (str.charAt(0) === '-') {
      str = str.slice(1);
    }
    return str;
    
  }