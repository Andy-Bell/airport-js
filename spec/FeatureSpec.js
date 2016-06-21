//I want to instruct a plane to land at an airport and confirm that it has landed
/*
  airport.land(plane);
  plane.isLanded() == true
*/
describe('An airplane lands', function(){
  it('lands successfully', function(){
    airport.land(plane);
    expect(plane.isLanded()).toEqual(true);
  });
});

// I want to instruct a plane to take off form an airport and confirm it is no longer in airport

/*
  airport.clearForTakeoff(plane)
  plane.isLanded() == false
*/

describe('A plane can take off', function(){
  it('takes off successfully', function(){
    airport.land(plane);
    airport.clearForTakeoff(plane);
    expect(plane.isLanded()).toEqual(false);
  });
});

//I want to prevent takeoff when weather is stormy
/*
  airport.clearForTakeoff == 'weather is stormy can't take off'
*/

describe('A plane cannot take off in stormy weather', function(){
  it('raises an error if the weather is stormy', function(){
    weather.current = null;
    spyOn(weather,'current').and.returnValue('stormy');
    expect( function(){ airport.clearForTakeoff(plane) } ).toThrowError('Too stormy to take off');
  });
});

//I want to prevent landing when weather is stormy
/*
  airport.land == "weather is stormy can't take off"
*/
describe('A plane cannot land in stormy weather', function(){
  it('raises an error if the weather is stormy', function(){
    weather.current = null;
    spyOn(weather,'current').and.returnValue('stormy');
    expect( function(){ airport.land(plane) } ).toThrowError('Too stormy to take off');
  });
});

//I want to prevent landing when the airport is full
/*
  airport.land === "airport is at full capacity"
*/
describe('A plane cannot land when the aiport is full', function(){
  it('raises an error when full', function(){
    for(var i = 0; i < 10; i++) {
      airport.land(plane);
    }
    expect( function(){ airport.land(plane) } ).toThrowError('Airport is at full capacity');
  });
});
