function check(arr, row, col, val){
    for(var i = 0; i<9; i++){
        if(arr[row][i] == val){
            return false
        }
    }
    for(var i = 0; i<9; i++){
        if(arr[i][col] == val){
            return false
        }
    }
    var r = (Math.floor(row/3))*3
    var c = (Math.floor(col/3))*3
    for(var i = 0; i<3; i++){
        for(var j = 0; j<3; j++){
            if(arr[r+i][j+c] == val){
                return false
            }
        }
    }
    return true
}
function emptyspot(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr.length; j++){
            if(arr[i][j] === 0){
                return [i, j]
            }
        }
    }
    return [-1, -1]
}
function solve(arr){
   var next = emptyspot(arr)
   var f = next[0]
   var s = next[1]
   if(f == -1){
       return
   }
   for(var num = 1; num<=9; num++){
       if(check(arr, f, s, num)){
           arr[f][s] = num;
           solve(arr)
       }
   }
   if(emptyspot(arr)[0] != -1){
       arr[f][s] = 0;
   }
   return arr
}
function runProgram(input) {
   input = input.trim().split("\n")
   var arr = []
   var line = 0;
   for(var i = 0; i<9; i++){
       var r = input[line].trim().split(" ").map(Number)
       arr.push(r)
       line++
   }
   solve(arr)
   var c = 0;
   for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr.length; j++){
            if(arr[i][j] === 0){
                c++;
            }
        }
    }
    if(c>0) return "Sudoku Cant be solved"
    else {
        return "Yes Can Be solved"
    }
    console.log(arr)
}

module.exports = {runProgram}