const { checkpass } = require("./password")

test(`if password id 2000 then symbol is missing, small alphabet is missing, cap alphabet is missing`, ()=>{
    expect(checkpass("2000")).toBe(`symbol is missing, small alphabet is missing, cap alphabet is missing`)
})
test(`if password id absc then symbol is missing, number is missing, cap alphabet is missing`, ()=>{
    expect(checkpass("absc")).toBe(`symbol is missing, number is missing, cap alphabet is missing`)
})
test(`if password id abscABc then symbol is missing, number is missing`, ()=>{
    expect(checkpass("abscABc")).toBe(`symbol is missing, number is missing`)
})
test(`if password id abscABc@ then number is missing`, ()=>{
    expect(checkpass("abscABc@")).toBe(`number is missing`)
})
test(`if password id Aakash@12 then correct password`, ()=>{
    expect(checkpass("Aakash@12")).toBe(`correct password`)
})
test(`if password id hjhS7 then symbol is missing`, ()=>{
    expect(checkpass("hjhS7")).toBe(`symbol is missing`)
})