/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth/AuthServices';
import { ApiBody } from '@nestjs/swagger';


@Controller("auth")
export class AuthController {
    constructor(private _authService: AuthService) { }
    @Post('login')
    @ApiBody({ type: String })
    SignIn(@Body() email: string) {
        return this._authService.logIn(email);
    }
}