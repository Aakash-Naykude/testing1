function matrix(mat){
    var sum = 0;
    for(var i = 0; i<mat.length; i++){
        for(var j = 0; j<mat.length; j++){
            sum += mat[i][j]
        }
    }
    return sum
}
module.exports = {matrix}