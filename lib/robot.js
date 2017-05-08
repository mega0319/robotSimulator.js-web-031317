'use strict';

function Robot(bearing, coordinates) {
  // implement your solution here!
  this.bearing = bearing

  this.orient = function(direction){
    var directions = ['east', 'west', 'north', 'south']
    if (directions.includes(direction)){
        this.bearing = direction
    }else{
      throw new Error("Invalid Robot Bearing")
    }
    }

  this.turnRight = function(){
    switch (this.bearing){
      case 'east':
        this.bearing = "south";
        break;
      case 'west':
        this.bearing = "north";
        break;
      case 'north':
        this.bearing = "east";
        break;
      case 'south':
        this.bearing = "west"
        break;
    }
  }

  this.turnLeft = function(){
    switch (this.bearing){
      case 'east':
        this.bearing = "north";
        break;
      case 'west':
        this.bearing = "south";
        break;
      case 'north':
        this.bearing = "west";
        break;
      case 'south':
        this.bearing = "east"
        break;
      }
  }

  this.coordinates = coordinates

  this.at = function(x, y){
    this.coordinates = [x, y]
  }

  this.instructions = function(instruction){
    var directionsArray = []
    instruction.split('').forEach(function(letter){
      if (letter === "L"){
        this.turnLeft()
        directionsArray.push('turnLeft')
      }
      else if (letter === "R"){
        this.turnRight()
        directionsArray.push('turnRight')
      }
      else if (letter === "A"){
        this.advance()
        directionsArray.push('advance')
      }
    }.bind(this))
    return directionsArray
  }

  this.advance = function(){
    if (this.bearing === "north"){
      this.coordinates[1]++
    }
    else if (this.bearing === "south"){
      this.coordinates[1]--
    }
    else if (this.bearing === "east"){
      this.coordinates[0]++
    }
    else if (this.bearing === "west"){
      this.coordinates[0]--
    }
  }

  this.place = function(obj){
    this.coordinates = [obj['x'], obj['y']]
    this.bearing = obj['direction']
  }

  this.evaluate = function(instruction){
    this.instructions(instruction)
  }

}
