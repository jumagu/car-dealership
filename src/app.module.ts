import { Module } from '@nestjs/common';

import { CarModule } from './car/car.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [CarModule, BrandModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
