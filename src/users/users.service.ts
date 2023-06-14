import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

Add(){
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
