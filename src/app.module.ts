import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://crud:crud@cluster0.aiwpfnf.mongodb.net/?retryWrites=true&w=majority'),UsersModule],
 })
export class AppModule {}
