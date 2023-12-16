import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MysqlModule } from './mysql/mysql.module';
import { MysqlConnectionService } from './mysql-connection/mysql-connection.service';
import { UsersMysqlService } from './users-mysql/users-mysql.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://users:gwbjFdj3uQnH1hui@cluster0.bkg61.mongodb.net/?retryWrites=true&w=majority'),UsersModule, MysqlModule],
  providers: [MysqlConnectionService, UsersMysqlService],
 })
export class AppModule {}
