import { Test, TestingModule } from '@nestjs/testing';
import { UsersMysqlService } from './users-mysql.service';

describe('UsersMysqlService', () => {
  let service: UsersMysqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMysqlService],
    }).compile();

    service = module.get<UsersMysqlService>(UsersMysqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
