import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { carsSeed } from './data/cars.seed';
import { brandsSeed } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  pupulateDB() {
    this.carsService.fillCarsWithSeedData(carsSeed);
    this.brandsService.fillBrandsWithSeedData(brandsSeed);
    return 'SEED excecuted';
  }
}
