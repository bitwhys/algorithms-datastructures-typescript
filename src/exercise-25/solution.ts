function isPalindrome(word) {
  if (word.length === 0) return true
  if (word.length === 1) return true
  return (
    word[0] === word[word.length - 1] &&
    isPalindrome(word.slice(1, word.length - 1))
  )
}

console.assert(isPalindrome("madam"), "Wrong implementation")
console.assert(isPalindrome("racecar"), "Wrong implementation")
console.assert(!isPalindrome("whatever"), "Wrong implementation")
