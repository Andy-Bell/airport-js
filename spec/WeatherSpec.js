describe('#current', function(){
  it('returns sunny or stormy', function(){
    expect(weather.current()).toEqual('sunny'||'stormy')
  });
});
