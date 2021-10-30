const { convert } = require("./time")

test(`Convert 20000000 ms to 5 Hours 33 Minutes 20 Seconds`, ()=>{
    expect(convert(20000000)).toBe(`5 Hours 33 Minutes 20 Seconds`)
})
test(`Convert 2000000 ms to 0 Hours 33 Minutes 20 Seconds`, ()=>{
    expect(convert(2000000)).toBe(`0 Hours 33 Minutes 20 Seconds`)
})
test(`Convert 4000000 ms to 1 Hours 6 Minutes 40 Seconds`, ()=>{
    expect(convert(4000000)).toBe(`1 Hours 6 Minutes 40 Seconds`)
})
test(`Convert 5000000 ms to 1 Hours 23 Minutes 20 Seconds`, ()=>{
    expect(convert(5000000)).toBe(`1 Hours 23 Minutes 20 Seconds`)
})
test(`Convert 6000000 ms to 1 Hours 40 Minutes 0 Seconds`, ()=>{
    expect(convert(6000000)).toBe(`1 Hours 40 Minutes 0 Seconds`)
})
