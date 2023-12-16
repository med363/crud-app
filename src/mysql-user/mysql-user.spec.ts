import { MysqlUser } from './mysql-user';

describe('MysqlUser', () => {
  it('should be defined', () => {
    expect(new MysqlUser()).toBeDefined();
  });
});
