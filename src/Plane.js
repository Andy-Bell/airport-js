function Plane(){
   this._isLanded = false
};

Plane.prototype = {
  isLanded: function(){
    return this._isLanded;
  },
  setLanded: function(){
    this._isLanded = true;
  },
  takeOff: function(){
    this._isLanded = false;
  }
};
