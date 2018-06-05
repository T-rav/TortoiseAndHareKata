describe("Race", function () {
	describe("Given hare sleeping at start and waking up at finish",function(){

		// (1) NOTE: first test => faked it with contant string
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

		// (2) NOTE driving toward a real formula, using _distance and _tortoiseSpeed to calculate sleep duration
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

	describe("Given hare sleeping at start and waking up at 1/2 through race",function(){
		// (3) NOTE: factoring in _hareSleepDistance into sleep duration calcuation
		// let sleepTime = (_distance - _hareSleepDistance) / _tortoiseSpeed; => added - _hareSleepDistance to time calcuation
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

		// (5) NOTE: if distanceToFinish > 0, adjust race parameters to account for this
		it("When hare wakes up with 1 meter until finish expect tortoise to win", function() {
			// arrange
			var race = new fableRace();
			// act
			var actual = race.withHareSpeed(100)
							.withTortoiseSpeed(10)
							.withRaceDistance(100)
							.withHareSleepDistance(50)
							.withTorotiseDistanceToFinish(1)
							.runRace();
			// assert
			expect(actual).toBe("The tortoise won the race. The hare is sleeping for 5 minutes.");
		});
	});
	
	describe("Given hare never sleeps during race",function(){
		// (4) NOTE: make calculateWinner function to figure out who won the race
		it("When hare never sleeps exepect hare win", function() {
			// arrange
			var race = new fableRace();
			// act
			var actual = race.withHareSpeed(100)
							.withTortoiseSpeed(10)
							.withRaceDistance(100)
							.withHareSleepDistance(100)
							.withTorotiseDistanceToFinish(0)
							.runRace();
			// assert
			expect(actual).toBe("The hare won the race. The hare is sleeping for 0 minutes.");
		});

		// (6) NOTE: handled tie
		it("When hare never sleeps exepect hare win", function() {
			// arrange
			var race = new fableRace();
			// act
			var actual = race.withHareSpeed(10)
							.withTortoiseSpeed(10)
							.withRaceDistance(100)
							.withHareSleepDistance(100)
							.withTorotiseDistanceToFinish(0)
							.runRace();
			// assert
			expect(actual).toBe("The hare and tortoise tie. The hare is sleeping for 0 minutes.");
		});
	});

	describe("Given hare sleeping at start and waking up at 2/3 through race",function(){
		// (7) NOTE: adjsuted hareMinutes when hare slept to account for remaining distance instead of where it slept
		it("When race distance 20 meters expect tortoise wins while hare sleeps for 1 minute", function() {
			// arrange
			var race = new fableRace();
			// act
			var actual = race.withHareSpeed(100)
							.withTortoiseSpeed(50)
							.withRaceDistance(300)
							.withHareSleepDistance(200)
							.withTorotiseDistanceToFinish(100)
							.runRace();
			// assert
			expect(actual).toBe("The hare and tortoise tie. The hare is sleeping for 2 minutes.");
		});
	});
});