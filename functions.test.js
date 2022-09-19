const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('Test Should run and 2 should return 2', () => {
    expect(2).toBe(2)
})

test('Test should return Hello James or Jill inserting a James and Jill as the name', () => {

    expect(greeting("James")).toBe("Hello, James"), 
    expect(greeting("Jill")).toBe("Hello, Jill")
})

describe('Math Functions',() => {


test('Test should add num1 and num2 returning the sum', () => {
    expect(add(1,2)).toBe(3),
    expect(add(5,9)).toBe(14)
})

test('Test should multiply num1 and num2 returning the sum', () => {
    expect(multiply(5,7)).toBe(35),
    expect(multiply(2,8)).toBe(16)   
})
test('test should divide num1 and num2 returning the correct value', () => {
    expect(divide(8,4)).toBe(2),
    expect(divide(144,12)).toBe(12)
})
test('Test should subtract num1 and num2 returning the sum', () => {
    expect(subtract(4,5)).toBe(-1),
    expect(subtract(28,15)).toBe(13)
})


})