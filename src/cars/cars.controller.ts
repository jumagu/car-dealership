import { Get, Post, Body, Param, Patch, Delete, Controller, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

// ? https://docs.nestjs.com/controllers
@Controller('cars') // Marks a class as a Nest controller.
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    // Use ParseIntPipe. Transforms the param 'id' into an integer.
    // Handles the exception if an invalid number is received.
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'DELETE',
      id,
    };
  }
}
