let fableRace = function() {
  let _hareSpeed;
  let _tortoiseSpeed;
  let _distance;
  let _hareSleepDistance;
  let _distanceToFinish;

  let calculateWinner = function(){
    let tortoiseMins = _distance / _tortoiseSpeed;
    let hareMinutes = _distance / _hareSpeed;

    if(_distanceToFinish > 0){
      tortoiseMins = _distanceToFinish / _tortoiseSpeed;
      hareMinutes = (_distanceToFinish + _hareSleepDistance) / _hareSpeed;
    }

    let winner = 'hare';
    if(tortoiseMins < hareMinutes){
      winner = 'tortoise';
    }

    return winner;
  }

  return { 
    withHareSpeed : function(hareSpeed){
      _hareSpeed = hareSpeed;
      return {
        withTortoiseSpeed : function(tortoiseSpeed){
          _tortoiseSpeed = tortoiseSpeed;
          return {
            withRaceDistance: function(distance){
              _distance = distance;
              return{
                withHareSleepDistance:function(hareSleepDistance){
                  _hareSleepDistance = hareSleepDistance;
                  return{
                    withTorotiseDistanceToFinish:function(distanceToFinish){
                      _distanceToFinish = distanceToFinish;
                      return{
                        runRace:function(){
                          let sleepTime = (_distance - _hareSleepDistance) / _tortoiseSpeed;
                          let winner = calculateWinner();
                          return `The ${winner} won the race. The hare is sleeping for ${sleepTime} minutes.`;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
