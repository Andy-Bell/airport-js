describe('#land', function(){
  it('sets a plane to landed', function(){
    airport.land(planeSpy);
    expect(planeSpy.setLanded).toHaveBeenCalled();
  });
  it('makes a call to weather', function(){
    spyAirport = new Airport(weatherSpy)
    spyAirport.land(planeSpy);
    expect(weatherSpy.current).toHaveBeenCalled();
  });
});

describe('#clearForTakeoff', function(){
  it('sets a plane to takeoff', function(){
    airport.land(planeSpy);
    airport.clearForTakeoff(planeSpy);
    expect(planeSpy.takeOff).toHaveBeenCalled();
  });
  it('makes a call to weather', function(){
    spyAirport = new Airport(weatherSpy)
    spyAirport.clearForTakeoff(planeSpy);
    expect(weatherSpy.current).toHaveBeenCalled();
  });
});

describe('#capacity', function(){
  it('raises an error when full', function(){
    for(var i = 0; i < 10; i++) {
      airport.land(planeSpy);
    }
    expect( function(){ airport.land(planeSpy) } ).toThrowError('Airport is at full capacity');
  });
});

describe('#setCapacity', function(){
  it('allows capacity to be set', function(){
    airport.setCapacity(15);
    expect(airport._capacity).toEqual(15);
  });
});
