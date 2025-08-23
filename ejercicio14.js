function repeatCounter(list) {
  const wordCount = {}

  for (const word of list) {
    if (wordCount[word]) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  }

  return wordCount
}

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

console.log(repeatCounter(words))
