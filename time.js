function convert(n){
    var min = 0;
    var hr = 0;
    var sec = Math.floor(n/1000)
    if(sec>60){
       min =  Math.floor(sec/60)
       sec = sec%60
       if(min>60){
        hr =  Math.floor(min/60)
        min = min%60
       }
    }   
   var out = hr + " Hours " + min + " Minutes " + sec + " Seconds"
   return out
}
module.exports = {convert}