import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

import { Brand } from './entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './dto';

@Injectable()
export class BrandService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuidv4(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with id '${id}' not found.`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brandExist = this.brands.some((b) => b.id === id);

    if (!brandExist) {
      throw new NotFoundException(`Brand with id '${id}' not found.`);
    }

    let updatedBrand: Brand | null = null;
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        updatedBrand = {
          ...brand,
          ...updateBrandDto,
          name: updateBrandDto.name.toLowerCase(),
          updatedAt: new Date().getTime(),
        };
        return updatedBrand;
      }

      return brand;
    });

    return updatedBrand;
  }

  remove(id: string) {
    const brandExist = this.brands.some((b) => b.id === id);

    if (!brandExist) {
      throw new NotFoundException(`Brand with id '${id}' not found.`);
    }

    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
