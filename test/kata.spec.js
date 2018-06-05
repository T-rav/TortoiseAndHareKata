describe("Race", function () {
	describe("hare sleeping at start and waking up at finish",function(){

		// NOTE: first test => faked it with contant string
		it("When race distance 10 meters expect tortoise wins while hare sleeps for 1 minute", function() {
			// arrange
			var race = new fableRace();
			// act
			var actual = race.withHareSpeed(0)
							.withTortoiseSpeed(10)
							.withRaceDistance(10)
							.withHareSleepDistance(0)
							.withTorotiseDistanceToFinish(0)
							.runRace();
			// assert
			expect(actual).toBe("The tortoise won the race. The hare is sleeping for 1 minutes.");
		});

		// NOTE driving toward a real formula, using _distance and _tortoiseSpeed to calculate sleep duration
		// let sleepTime = _distance  / _tortoiseSpeed; => build calcuation
		it("When race distance 20 meters expect tortoise wins while hare sleeps for 2 minute", function() {
			// arrange
			var race = new fableRace();
			// act
			var actual = race.withHareSpeed(0)
							.withTortoiseSpeed(10)
							.withRaceDistance(20)
							.withHareSleepDistance(0)
							.withTorotiseDistanceToFinish(0)
							.runRace();
			// assert
			expect(actual).toBe("The tortoise won the race. The hare is sleeping for 2 minutes.");
		});
	});

	// NOTE: factoring in _hareSleepDistance intto sleep duration calcuation
	// let sleepTime = (_distance - _hareSleepDistance) / _tortoiseSpeed; => added - _hareSleepDistance to time calcuation
	describe("hare sleeping at start and waking up at 1/2 through race",function(){
		it("When race distance 20 meters expect tortoise wins while hare sleeps for 1 minute", function() {
			// arrange
			var race = new fableRace();
			// act
			var actual = race.withHareSpeed(0)
							.withTortoiseSpeed(10)
							.withRaceDistance(20)
							.withHareSleepDistance(10)
							.withTorotiseDistanceToFinish(10)
							.runRace();
			// assert
			expect(actual).toBe("The tortoise won the race. The hare is sleeping for 1 minutes.");
		});
	});
});
