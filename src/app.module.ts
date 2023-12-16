import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://blibechmohamedamine:crud@cluster0.n5gl1fo.mongodb.net/?retryWrites=true&w=majority'),UsersModule],
  providers: [],
 })
export class AppModule {}
