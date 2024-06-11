/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable,Inject ,UnauthorizedException} from "@nestjs/common";
import { UserService } from "../user/UserServices";
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService{
    constructor(private _userService:UserService,private _jwtService:JwtService){}
    async logIn(email:string):Promise<any>{
        const user= await this._userService.findByEmail(email);
        if(!user.id){
            throw new UnauthorizedException
        }
        return {
            access_token:await this._jwtService.signAsync(user)
        }
    }
}