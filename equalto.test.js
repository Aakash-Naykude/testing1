test("on this {} input output must be {}", ()=>{
    expect( {} ).toEqual( {} )
})
test("on this {} input output must be {}", ()=>{
    expect( [] ).toEqual( [] )
})
test("on this {} input output must be {}", ()=>{
    expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } )
})
test("on this {} input output must be {}", ()=>{
    expect( [ 1, 2, 3 ] ).toEqual( [ 1, 2, 3 ] )
})
test("on this {} input output must be {}", ()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} ) 
})
test("on this {} input output must be {}", ()=>{
    expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] )
})
test("on this {} input output must be {}", ()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { e: 1, d: 2 }} )
})
test("on this {} input output must be {}", ()=>{
    expect( [ 1, 2, [ 1, 3] ] ).toEqual( [ 1, 2, [ 1, 2]  ] )
})