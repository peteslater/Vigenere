const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const createPaddedKeyword = (plaintext, keyword) => {
  let keywordArray = Array.from(keyword)
  let paddedKeyword = []

  for(let i=0; i<plaintext.length; i++) {
    if(alphabet.includes(plaintext.charAt(i))) {
      let char = keywordArray.shift()
      paddedKeyword.push(char)
      keywordArray.push(char)
    }
    else {
      paddedKeyword.push(plaintext.charAt(i))
    }
  }

  return paddedKeyword.join('')
}

const createShiftedAlphabet = (n) => {
  let shiftedAlphabet = alphabet.slice()

  for(let i=0; i<n; i++) {
    let shiftedChar = shiftedAlphabet.shift()
    shiftedAlphabet.push(shiftedChar)
  }

  return shiftedAlphabet
}

const encrypt = (plaintext, keyword) => {
  let paddedKeyword = createPaddedKeyword(plaintext, keyword)
  let lookupTable = new Map(alphabet.map((c,i) => [c, createShiftedAlphabet(i)]))

  let ciphertext = []

  for(let i=0; i<plaintext.length; i++) {
    if(alphabet.includes(plaintext.charAt(i))) {
      let alphabetIndex = alphabet.indexOf(paddedKeyword.charAt(i))

      ciphertext.push(lookupTable.get(plaintext.charAt(i))[alphabetIndex])
    }
    else {
      ciphertext.push(plaintext.charAt(i))
    }
  }

  return ciphertext.join('')
}

export {
  createPaddedKeyword,
  createShiftedAlphabet,
  encrypt
}
