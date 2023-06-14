import { Injectable } from '@nestjs/common';

import { UserDto } from 'src/dto/users.dto';

@Injectable()
export class UsersService {

Add(body: UserDto){

    return 'add action';
}


FindAll(){
    return 'all users';
}


GetById(){
    return "find one user";
}



Update(){
    return "update user";
}

Delete(){
    return "delete user";
}


Search(){
    return "search for user";
}

}
