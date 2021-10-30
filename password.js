function checkpass(str){
    var c = 0;
    var num = "0123456789"
    var small = "abcdefghijklmnopqrstuvwxyz"
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var sym = `!@#$%^&*(),.<>/';:"][{}\|?`
    var out = []
    var sy = 0;
    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<sym.length; j++){
            if(str[i] === sym[j]){
                sy++;   
            }
        }
    } 
    if(sy == 0){
        out.push("symbol is missing")
    }
    var n = 0;
    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<num.length; j++){
            if(str[i] === num[j]){
               n++
            }
        }
    }
    if(n == 0){
        out.push("number is missing")
    }
    var sa = 0
    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<small.length; j++){
            if(str[i] === small[j]){
                sa++
            }
        }
    }
    if(sa == 0){
        out.push("small alphabet is missing");
    }
    var ca = 0;
    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<cap.length; j++){
            if(str[i] === cap[j]){
                ca++
            }
        }
    }
    if(ca == 0){
        out.push("cap alphabet is missing");
    }
    if(out.length == 0){
        return "correct password"
    } else return out.join(", ")
    
}
console.log(checkpass("hjhS7"))
module.exports = { checkpass }