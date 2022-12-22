import {add, substract} from "./calculator.js";

test('add two plus two', () => {
    expect(add(2,2)).toBe(4);
})

test('add letters return null', () => {
    expect(add(2,'s')).toBeNull();
})

test('substract 2 from 4', () => {
    expect(substract(4,2)).toBe(2);
})