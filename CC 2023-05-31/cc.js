// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

String.prototype.vowel = function() {
    let vowels = ["a", "e", "i", "o", "u"]
    const lowercaseChar = this.toLowerCase()
    return vowels.includes(lowercaseChar)
  };