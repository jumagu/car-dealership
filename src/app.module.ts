import { Module } from '@nestjs/common';

import { CarModule } from './car/car.module';
import { SeedModule } from './seed/seed.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [CarModule, BrandModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
