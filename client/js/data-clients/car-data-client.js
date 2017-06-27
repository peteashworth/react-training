import { BaseDataClient } from './base-data-client';

export class CarDataClient extends BaseDataClient {

  constructor(serverUrl) {
    super(serverUrl);
  }

  all() {
    return this._request(
      `query AllCars {
        cars {
          id make model year color price
        }
      }`,
      null,
      'AllCars'
    );
  }

  one(carId) {
    return this._request(
      `query OneCar($carId: Int) {
        car(carId: $carId) {
          id make model year color price
        }
      }`,
      { carId },
      'OneCar'
    );
  }

  insert(car) {
    return this._request(
      `mutation InsertCar($car: InsertCarInputType) {
        insertCar(car: $car) {
          id make model year color price
        }
      }`,
      { car },
      'InsertCar'
    );
  }

  replace(car) {
    return this._request(
      `mutation ReplaceCar($car: ReplaceCarInputType) {
        replaceCar(car: $car) {
          id make model year color price
        }
      }`,
      { car },
      'ReplaceCar'
    );
  }

  delete(carId) {
    return this._request(
      `mutation DeleteCar($carId: Int) {
        deleteCar(carId: $carId) {
          id make model year color price
        }
      }`,
      { carId },
      'DeleteCar'
    );
  }

}