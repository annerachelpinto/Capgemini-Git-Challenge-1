const binary_Search = require('./binarysearch');

test('Should return index of element in array', ()=>{
    expect(binary_Search([15, 20, 34, 44, 56, 69, 71, 82, 96, 104], 56)).toBe(4)
})

test('Should return -1', ()=>{
    expect(binary_Search([15, 20, 34, 44, 56, 69, 71, 82, 96, 104], 5)).toBe(-1)
})

test('index of 4 in [1,2,3,4,5,6] should be 3', ()=>{
    expect(binary_Search([1,2,3,4,5,6],4)).toBe(3)
})

test('index of 2 in [1,2,3,4,5,6] should not be 0',()=>{
    expect(binary_Search([1,2,3,4,5,6],2)).not.toBe(3)
})

test('index of 7 in [1,2,3,4,5,6] should be -1',()=>{
    expect(binary_Search([1,2,3,4,5,6],7)).toBe(-1)
})