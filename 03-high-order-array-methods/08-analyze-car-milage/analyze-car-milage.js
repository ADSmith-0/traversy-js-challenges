function analyzeCarMileage(cars) {
  const mileages = cars.map((car) => car.mileage);

  const totalMileage = mileages.reduce((sum, num) => sum + num, 0) ;
  const averageMileage = totalMileage / mileages.length;

  const highestMileage = Math.max(...mileages);
  const highestMileageCar = cars.find((car) => car.mileage === highestMileage);

  const lowestMileage = Math.min(...mileages);
  const lowestMileageCar = cars.find((car) => car.mileage === lowestMileage);

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage
  }
}

module.exports = analyzeCarMileage;
