describe('#land', function(){

  it('sets a plane to landed', function(){
    airport.land(planeSpy);
    expect(planeSpy.setLanded()).toHaveBeenCalled();
  });
});

describe('#clearForTakeoff', function(){
  it('sets a plane to takeoff', function(){
    airport.land(planeSpy);
    airport.clearForTakeoff(planeSpy);
    expect(planeSpy.takeOff()).toHaveBeenCalled();
  });
});
