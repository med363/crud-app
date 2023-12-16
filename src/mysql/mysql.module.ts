// mysql.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnectionService } from '../mysql-connection/mysql-connection.service';
import { User } from '../models/users.models';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'mysqlConnection',
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'med_amine',
      password: 'Myp@ssword123',
      database: 'nest',
      entities: [User], // Assuming User is the entity for MySQL
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [MysqlConnectionService],
  exports: [MysqlConnectionService],
})
export class MysqlModule {}
