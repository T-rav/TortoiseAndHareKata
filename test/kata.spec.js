describe("Race", function () {
	describe("Given race distance is 100 meters",function(){
		it("When hare sleeping at start and waking up at finish, tortoise wins", function() {
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

		it("When hare sleeping at start and waking up at to finish, tortoise looses", function() {
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
});
