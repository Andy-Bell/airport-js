function Airport(name){
  this._name = name;
};

Airport.prototype = {
  land: function(plane){
    plane.setLanded();
  }
};
