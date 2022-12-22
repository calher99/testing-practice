import capitalize from "./capitalize.js";

test('to capital letters', () => {
    expect(capitalize('hello')).toBe('Hello');
})