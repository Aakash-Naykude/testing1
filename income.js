function incomes(n){
    if(n<500000){
        n = n*0.5
    } else if(n>500000 && n<=1000000){
        n = n*0.3
    } else if(n>1000000){
        n = n*0.1
    }
    var tax = 0;
    if(n<250000){
        tax = "no tax"
    } else if(n>250000 && n<=500000){
        tax = n*0.1
    } else if(n>500000 && n<=1000000){
        tax = n*0.2
    } else if(n>1000000){
        tax = n*0.3
    }
    return tax
}
console.log(incomes(10000000))
module.exports = { incomes }