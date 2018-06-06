let fableRace = function() {
  let _hareSpeed;
  let _tortoiseSpeed;
  let _distance;
  let _hareSleepDistance;
  let _distanceToFinish;

  let calcuateRaceOutcome = function(){
    let tortoiseMins = _distance / _tortoiseSpeed;
    let hareMinutes = _distance / _hareSpeed;

    if(_distanceToFinish > 0){
      tortoiseMins = _distanceToFinish / _tortoiseSpeed;
      hareMinutes = (_distanceToFinish + (_distance - _hareSleepDistance)) / _hareSpeed;
    }

    let raceOutcome = 'hare won the race';
    if(tortoiseMins < hareMinutes){
      raceOutcome = 'tortoise won the race';
    }

    if(tortoiseMins == hareMinutes){
      raceOutcome = 'hare and tortoise tie'
    }

    return raceOutcome;
  }

  let calculateDistanceTorotiseTraveled = function(){
    if((_hareSleepDistance == 0 && _distanceToFinish == 0)){
      return _distance;
    }

    if(_distanceToFinish == 0){
      return 0;
    }

    let timeForHareToGetToSleepLocation = _hareSleepDistance / _hareSpeed;
    let distanceTorotiseTraveledWhenHareWentToSleep = _tortoiseSpeed * timeForHareToGetToSleepLocation;
    let totalDistanceTorotiseTraveledWhileHareSlept = (_distance - distanceTorotiseTraveledWhenHareWentToSleep) - _distanceToFinish;
    
    return totalDistanceTorotiseTraveledWhileHareSlept;
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
                          let torotiseTravelDistance = calculateDistanceTorotiseTraveled();
                          let hareSleepTime = Math.ceil(torotiseTravelDistance / _tortoiseSpeed);
                          let raceOutcome = calcuateRaceOutcome();
                          return `The ${raceOutcome}. The hare is sleeping for ${hareSleepTime} minutes.`;
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
