import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    /*contructor faire appel ro au service*/
constructor(private readonly service: UsersService){};
/*les methodes API*/
/*function*/
@Post()
Add(){
    return this.service.Add();
}

@Get()
FindAll(){
    return this.service.FindAll();
}

@Get('/:id')
GetById(@Param(){id}){
    return this.service.GetById();
}


@Put('/:id')
Update(@Param(){id}){
    return this.service.Update();
}

@Delete('/:id')
Delete(@Param(){id}){
    return this.service.Delete();
}

@Post('/search')
Search(@Query(){key}){
    return this.service.Search();
}


}
