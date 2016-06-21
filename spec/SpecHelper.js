beforeEach(function () {
  airport = new Airport;
  plane = new Plane;
  planeSpy = jasmine.createSpyObj('planeSpy',['setLanded', 'takeOff']);
});

