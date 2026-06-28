import { Injectable, NotFoundException, Param } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

// ? https://docs.nestjs.com/providers
@Injectable() // Marks a class as a provider
export class CarService {
  private cars: Car[] = [
    {
      id: uuidv4(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuidv4(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuidv4(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((c) => c.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found.`); // This will be caught by the Nest global exception layer.
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuidv4(),
      brand: createCarDto.brand,
      model: createCarDto.model,
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const carExist = this.cars.some((c) => c.id === id);

    if (!carExist) {
      throw new NotFoundException(`Car with id '${id}' not found.`);
    }

    let updatedCar: Car | null = null;
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        updatedCar = { ...car, ...updateCarDto, id };
        return updatedCar;
      }

      return car;
    });

    return updatedCar;
  }

  delete(id: string) {
    const carExist = this.cars.some((c) => c.id === id);

    if (!carExist) {
      throw new NotFoundException(`Car with id '${id}' not found.`);
    }

    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
