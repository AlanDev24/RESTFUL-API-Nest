import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './DTOs';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corola',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carBD = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carBD = {
          ...carBD,
          ...updateCarDto,
          id,
        };
      }
      return car;
    });
    return carBD;
  }

  delete(id: string) {
    const car = this.findOneById(id);
    if (!car) throw new Error(`Cannot find car with id ${id}`);
    this.cars = this.cars.filter((car) => car.id !== id);
    return 'Deleted successfully';
  }

  fillCarsWithSeedData(cars) {
    this.cars = cars;
  }
}
