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
    return 'add action';
}

@Get()
FindAll(){
    return 'all users';
}

@Get('/:id')
GetById(@Param(){id}){
    return id;
}


@Put('/:id')
Update(@Param(){id}){
    return id;
}

@Delete('/:id')
Delete(@Param(){id}){
    return id;
}

@Post('/search')
Search(@Query(){key}){
    return key;
}


}
