module.exports.levenshtein = (a, b) => {
  let firstWord = a || ''
  let secondWord = b || ''

  if (firstWord.length === 0) return secondWord.length
  if (secondWord.length === 0) return firstWord.length
  let tmp, i, j, prev, val, row
  // swap to save some memory O(min(firstWord,secondWord)) instead of O(firstWord)
  if (firstWord.length > secondWord.length) {
    tmp = firstWord
    firstWord = secondWord
    secondWord = tmp
  }

  row = Array(firstWord.length + 1)
  // init the row
  for (i = 0; i <= firstWord.length; i++) {
    row[i] = i
  }

  // fill in the rest
  for (i = 1; i <= secondWord.length; i++) {
    prev = i
    for (j = 1; j <= firstWord.length; j++) {
      if (secondWord[i - 1] === firstWord[j - 1]) {
        val = row[j - 1] // match
      } else {
        val = Math.min(row[j - 1] + 1, // substitution
          Math.min(prev + 1, // insertion
            row[j] + 1)) // deletion
      }
      row[j - 1] = prev
      prev = val
    }
    row[firstWord.length] = prev
  }
  return row[firstWord.length]
}

module.exports.nextAssessmentDate = (numCorrectAttempts, lastAssessedDate) => {
  const milliSecIntervals = {
    pimsleur: [5000, 25000, 120000, 600000, 3600000, 18000000, 86400000, 432000000, 2160000000, 10512000000, 63072000000],
    wozniak: [0, 60000, 86400000, 864000000, 2592000000, 5184000000, 10368000000, 20736000000]
  }
  if (numCorrectAttempts < 0) {
    return new Date(
      lastAssessedDate.getTime() + milliSecIntervals['wozniak'][0]
    )
  } else if (numCorrectAttempts >= milliSecIntervals['wozniak'].length) {
    return new Date(8640000000000000)
  } else {
    return new Date(
      lastAssessedDate.getTime() + milliSecIntervals['wozniak'][numCorrectAttempts]
    )
  }
}

/* Updates `correctAttempts` `wrongAttempts` according to `isCorrect` */
module.exports.attemptAnswer = (qapair, isCorrect) => {
  let curTime = new Date()
  qapair.lastAssessed = curTime
  if (isCorrect) {
    qapair.correctAttempts++
    qapair.netCorrectAttempts++
  } else {
    qapair.wrongAttempts++
    if (qapair.netCorrectAttempts > 0) {
      qapair.netCorrectAttempts--
    }
  }
  qapair.toBeAssessedNext = module.exports.nextAssessmentDate(qapair.netCorrectAttempts, curTime)
}
