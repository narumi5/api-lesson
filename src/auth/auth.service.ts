import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ConfigService } from '@nestjs/config';
import {JwtService}  from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { Msg, Jwt } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwt: JwtService,
        private readonly config: ConfigService,
    ) {}
    async signUp(dto: AuthDto) {
        const hashed =  await bcrypt.hash(dto.password, 12);
        try{
            await this.prisma.user.create({
                date: {
                    email: dto.email,
                    hashedPassword: hashed,
                },
            });
            return{
                message: 'ok',
            };
        }catch (error) {
            if (error interfaceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('This email is already taken');
                }
            }
            throw error;
        }
    }
}
