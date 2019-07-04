import { createPaddedKeyword, createShiftedAlphabet, encrypt } from '../src/main'

test('The createPaddedKeyword function will return a padded keyword the length of the plaintext when the keyword is shorter than the plaintext', () => {
  expect(createPaddedKeyword('a test message', 'test')).toEqual('t estt esttest')
})

test('The createPaddedKeyword function will return a padded keyword the length of the plaintext when the keyword is longer than the plaintext', () => {
  expect(createPaddedKeyword('a test message', 'testingcodeistricky')).toEqual('t esti ngcodei')
})

test('The createShiftedAlphabet function will return alphabet shifted left by one character when passed `1`', () => {
  expect(createShiftedAlphabet(1)).toEqual('bcdefghijklmnopqrstuvwxyza'.split(''))
})

test('The encrypt function should return an encrypted cypher text', () => {
  expect(encrypt('a test message', 'test')).toEqual('t xwlm qwlleyx')
})
