const { convert } = require("./time")

test(`Convert 20000000 ms to 5 Hours 33 Minutes 20 Seconds`, ()=>{
    expect(convert(20000000)).toBe(`5 Hours 33 Minutes 20 Seconds`)
})
test(`Convert 2000000 ms to 0 Hours 33 Minutes 20 Seconds`, ()=>{
    expect(convert(2000000)).toBe(`0 Hours 33 Minutes 20 Seconds`)
})