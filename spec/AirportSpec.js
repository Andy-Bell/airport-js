describe('#land', function(){

  it('sets a plane to landed', function(){
    airport.land(planeSpy);
    expect(planeSpy.setLanded).toHaveBeenCalled();
  });
});
