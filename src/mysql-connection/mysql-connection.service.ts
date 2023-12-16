// mysql-connection.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { MysqlUser } from '../mysql-user/mysql-user';

@Injectable()
export class MysqlConnectionService {
  constructor(
    @InjectRepository(MysqlUser)
    private readonly userRepository: Repository<MysqlUser>,
  ) {}

  async findAllUsers(): Promise<MysqlUser[]> {
    return this.userRepository.find();
  }

  async findUserById(id: any): Promise<MysqlUser | undefined> {
    return this.userRepository.findOne(id);
  }

  async createUser(user: MysqlUser): Promise<MysqlUser> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async updateUser(id: any, updatedUser: Partial<MysqlUser>): Promise<MysqlUser | undefined> {
    await this.userRepository.update(id, updatedUser);
    return this.userRepository.findOne(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async searchUsersByKey(key: string, value: string): Promise<MysqlUser[]> {
    const query = {
      [key]: {
        $regex: value,
        $options: 'i', // Case-insensitive search
      },
    };
  
    return this.userRepository.find({
      where: query,
    });
  }
}
