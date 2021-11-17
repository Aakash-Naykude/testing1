const {runProgram} = require("./sudoku")

test(`This given sudoku Yes Can Be solved`, ()=>{
    var test = `0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
    9 2 8 0 0 0 0 6 0`
    expect(runProgram(test)).toBe(`Yes Can Be solved`)
})
test(`This given sudoku Yes Can Be solved`, ()=>{
    var test = `0 0 1 7 2 5 0 0 0
    0 8 0 0 1 0 0 0 6
    2 5 0 0 0 0 1 3 0
    0 7 0 0 0 0 5 0 0
    0 0 0 1 0 6 0 0 0
    0 0 9 0 0 0 0 8 0
    0 4 5 0 0 0 0 2 9
    7 0 0 0 9 0 0 6 0
    0 0 0 6 4 8 3 0 0`
    expect(runProgram(test)).toBe(`Yes Can Be solved`)
})
test(`This given sudoku Sudoku Cant be solved`, ()=>{
    var test = `0 0 0 0 0 0 0 0 0
    1 0 0 0 4 0 0 7 0
    7 0 0 5 0 0 0 2 0
    0 1 7 6 0 0 5 0 0
    0 6 0 0 0 0 3 0 0
    0 0 0 7 0 2 6 0 4
    0 0 0 9 0 0 0 4 5
    0 0 9 2 0 8 0 0 0
    0 0 8 0 3 0 0 0 0 `
    expect(runProgram(test)).toBe(`Sudoku Cant be solved`)
})
