import {add, substract, divide, multiply } from "./calculator.js";

test('add two plus two', () => {
    expect(add(2,2)).toBe(4);
})

test('add letters return null', () => {
    expect(add(2,'s')).toBeNull();
})

test('substract 2 from 4', () => {
    expect(substract(4,2)).toBe(2);
})

test('divide 4 between 4', () => {
    expect(divide(4,4)).toBe(1);
})

test('divide 0 between 4', () => {
    expect(divide(0,4)).toBe(0);
})

test('multiply 2 by 8', () => {
    expect(multiply(2,8)).toBe(16);
})
