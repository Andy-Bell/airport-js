function Airport(weather){
  this._weather = weather;
  this._capacity = 10;
  this._contains = [];
};

Airport.prototype = {
  land: function(plane){
    if(this._capacity === this._contains.length) {
      throw new Error ('Airport is at full capacity');
    }
    if(this._weather.current() === 'stormy') {
      throw new Error ('Too stormy to take off');
    } else {
      plane.setLanded();
      this._contains.push(plane);
    }
  },
  clearForTakeoff: function(plane){
    if(this._weather.current() === 'stormy') {
      throw new Error ('Too stormy to take off');
    } else {
      plane.takeOff();
    }
  },
  setCapacity: function(number){
    this._capacity = number;
  }
};
