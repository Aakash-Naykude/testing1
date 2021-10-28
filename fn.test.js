// const { convert } = require("./time")

// test(`Convert 20000000 ms to 5 Hours 33 Minutes 20 Seconds`, ()=>{
//     expect(convert(20000000)).toBe(`5 Hours 33 Minutes 20 Seconds`)
// })
// test(`Convert 2000000 ms to 0 Hours 33 Minutes 20 Seconds`, ()=>{
//     expect(convert(2000000)).toBe(`0 Hours 33 Minutes 20 Seconds`)
// })
// test(`Convert 4000000 ms to 1 Hours 6 Minutes 40 Seconds`, ()=>{
//     expect(convert(4000000)).toBe(`1 Hours 6 Minutes 40 Seconds`)
// })
// test(`Convert 5000000 ms to 1 Hours 23 Minutes 20 Seconds`, ()=>{
//     expect(convert(5000000)).toBe(`1 Hours 23 Minutes 20 Seconds`)
// })
// test(`Convert 6000000 ms to 1 Hours 40 Minutes 0 Seconds`, ()=>{
//     expect(convert(6000000)).toBe(`1 Hours 40 Minutes 0 Seconds`)
// })


const { incomes } = require("./income")

test(`tax on 40000 is no tax`, ()=>{
    expect(incomes(40000)).toBe(`no tax`)
})
test(`tax on 500000 is 50000`, ()=>{
    expect(incomes(500000)).toBe(50000)
})
test(`tax on 50000000 is 1500000`, ()=>{
    expect(incomes(50000000)).toBe(1500000)
})

test(`tax on 2000 is no tax`, ()=>{
    expect(incomes(2000)).toBe(`no tax`)
})
test(`tax on 9000000 is 180000`, ()=>{
    expect(incomes(9000000)).toBe(180000)
})
test(`tax on 90000 is no tax`, ()=>{
    expect(incomes(90000)).toBe(`no tax`)
})
test(`tax on 10000000 is 200000`, ()=>{
    expect(incomes(10000000)).toBe(200000)
})