beforeEach(function () {
  weather = new Weather;
  weatherSpy = jasmine.createSpyObj('weatherSpy',['current']);
  airport = new Airport(weather);
  plane = new Plane;
  planeSpy = jasmine.createSpyObj('planeSpy',['setLanded', 'takeOff']);
  spyOn(weather,'current').and.returnValue('sunny');
});
