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
