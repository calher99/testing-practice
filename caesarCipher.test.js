import caesarCipher from './caesarCipher.js'

test('cipher one letter', () => {
    expect(caesarCipher('a' , 1)).toBe('b');
})

test('cipher several letters', () => {
    expect(caesarCipher('aje' , 1)).toBe('bkf');
})