import { Module } from '@nestjs/common';

import { CarModule } from 'src/car/car.module';
import { BrandModule } from 'src/brand/brand.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [CarModule, BrandModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
