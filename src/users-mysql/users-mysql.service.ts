import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/users.dto';
import { MysqlConnectionService } from '../mysql-connection/mysql-connection.service';
import { MysqlUser } from 'src/mysql-user/mysql-user';

@Injectable()
export class UsersMysqlService {
  constructor(
    private readonly mySqlConnectionService: MysqlConnectionService,
  ) {}

  async Add(body: MysqlUser) {
    return this.mySqlConnectionService.createUser(body);
  }

  async FindAll() {
    return this.mySqlConnectionService.findAllUsers();
  }

  async GetById(id: number) {
    return this.mySqlConnectionService.findUserById(id); // Assuming id is a string
  }

  async Update(id: number, body: UserDto) {
    return this.mySqlConnectionService.updateUser(id, body);
  }

  async Delete(id: number) {
    return this.mySqlConnectionService.deleteUser(id);
  }

  async Search(key: string) {
    const value = key;
    return this.mySqlConnectionService.searchUsersByKey('fullname', value);
  }
}
