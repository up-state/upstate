import { Test, TestingModule } from '@nestjs/testing';
import { DBPool } from './db-pool.service';

describe('DbpoolService', () => {
  let service: DBPool;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DBPool],
    }).compile();

    service = module.get<DBPool>(DBPool);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
