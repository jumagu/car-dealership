import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';

import { CarService } from './car.service';
import { CreateCarDto, UpdateCarDto } from './dto';

// ? https://docs.nestjs.com/controllers
@Controller('cars') // Marks a class as a Nest controller.
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    // Use ParseUUIDPipe. Validate that the 'id' param is a valid UUID.
    // Handle the exception if an invalid UUID is received.
    console.log({ id });
    return this.carService.findOneById(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  delete(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carService.delete(id);
  }
}
