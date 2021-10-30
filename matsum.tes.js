const {matrix} = require("./matrixsum")
test(`sum of matrix test must be 45`, ()=>{
    var test = [[1,2,3],
                [4,5,6],
                [7,8,9]]
    expect(matrix(test)).toBe(45)
})
test(`sum of matrix test must be 45`, ()=>{
    var test = [[11,12,13],
                [4,5,6],
                [7,8,9]]
    expect(matrix(test)).toBe(75)
})
test(`sum of matrix test must be 45`, ()=>{
    var test = [[11,12,13],
                [24,5,6],
                [7,8,9]]
    expect(matrix(test)).not.toBe(75)
})
test(`sum of matrix test must be 45`, ()=>{
    var test = [[11,12,13],
                [4,25,6],
                [7,8,9]]
    expect(matrix(test)).toBe(95)
})
test(`sum of matrix test must be 45`, ()=>{
    var test = [[11,12,13],
                [4,5,26],
                [7,8,9]]
    expect(matrix(test)).toBe(95)
})
test(`sum of matrix test must be 45`, ()=>{
    var test = [[1,12,13],
                [4,5,26],
                [7,8,9]]
    expect(matrix(test)).toBe(85)
})
test(`sum of matrix test must be 45`, ()=>{
    var test = [[11,12,3],
                [4,5,26],
                [7,8,9]]
    expect(matrix(test)).toBe(85)
})