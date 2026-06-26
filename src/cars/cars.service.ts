import { Injectable, NotFoundException } from '@nestjs/common';

// ? https://docs.nestjs.com/providers
@Injectable() // Marks a class as a provider
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((c) => c.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found.`); // This will be caught by the Nest global exception layer.
    }

    return car;
  }
}
