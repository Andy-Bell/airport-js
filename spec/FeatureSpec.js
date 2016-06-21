//I want to instruct a plane to land at an airport and confirm that it has landed
/*
  airport.land(plane);
  plane.isLanded();
*/
describe('An airplane lands', function(){
  it('lands successfully', function(){
    airport.land(plane);
    expect(plane.isLanded()).toEqual(true);
  });
});
