function wordValue(a) {
    var result = [];

  for (var i = 0; i < a.length; i++) {
    var value = 0;
    var str = a[i].replace(/\s/g, ''); // Remove spaces

    for (var j = 0; j < str.length; j++) {
      var charValue = str.charCodeAt(j) - 96; // Calculate character value
      value += charValue;
    }

    result.push(value * (i + 1)); // Multiply by position in the array
  }

  return result;
}