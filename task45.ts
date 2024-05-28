interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any additional properties
  }  
  function createCar(manufacturer: string, model: string, ...options: [string, any][]): CarInfo {
    const car: CarInfo = {
      manufacturer,
      model,
    };
    for (const [key, value] of options) {
      car[key] = value;
    }
    return car;
  }
  const carInfo = createCar("Honda", "Civic", ["color", "white"], ["year", 2023]);
  console.log(carInfo);
  