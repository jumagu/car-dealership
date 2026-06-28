import { Injectable } from '@nestjs/common';

import { SEED_CARS } from './data/cars.data';
import { SEED_BRANDS } from './data/brands.data';
import { CarService } from 'src/car/car.service';
import { BrandService } from 'src/brand/brand.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarService,
    private readonly brandService: BrandService,
  ) {}

  execute() {
    this.carService.fillCarsWithSeedData(SEED_CARS);
    this.brandService.fillBrandsWithSeedData(SEED_BRANDS);

    return 'SEED EXECUTED';
  }
}
