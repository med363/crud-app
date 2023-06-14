import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/users.models';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
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
