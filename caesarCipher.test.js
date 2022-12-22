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

test('cipher sentence', () => {
    expect(caesarCipher('my name is carlos' , 8)).toBe('ug vium qa kiztwa');
})

test('cipher uppercase', () => {
    expect(caesarCipher('LOreM' , 7)).toBe('SVylT');
})

test('accept symbols and numbers', () => {
    expect(caesarCipher('LOreM59/' , 7)).toBe('SVylT59/');
})
