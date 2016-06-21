 describe('#isLanded', function(){
   it('checks the plane is not landed on initialization', function(){
     expect(plane.isLanded()).toEqual(false);
   });
   it('checks the plane has landed', function(){
     plane.setLanded();
     expect(plane.isLanded()).toEqual(true);
   });
 });
