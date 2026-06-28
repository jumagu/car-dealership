import { v4 as uuidv4 } from 'uuid';

import { Brand } from 'src/brand/entities/brand.entity';

export const SEED_BRANDS: Brand[] = [
  {
    id: uuidv4(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
];
