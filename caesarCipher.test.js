import caesarCipher from './caesarCipher.js'

test('cipher one letter', () => {
    expect(caesarCipher('a' , 1)).toBe('b');
})

test('cipher several letters', () => {
    expect(caesarCipher('aje' , 1)).toBe('bkf');
})

test('cipher letters at end of alphabet', () => {
    expect(caesarCipher('yz' , 3)).toBe('bc');
})