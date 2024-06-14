import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const carsSeed: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'SR3',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
