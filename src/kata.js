let fableRace = function() {
  let _hareSpeed;
  let _tortoiseSpeed;
  let _distance;
  let _hareSleepDistance;

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
                          let sleepTime = _distance / _tortoiseSpeed;
                          return `The tortoise won the race. The hare is sleeping for ${sleepTime} minutes.`;
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
