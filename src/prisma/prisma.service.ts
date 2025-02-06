import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { prismaClient } from '@nestjs/config';

@Injectable()
export class PrismaService {
    constructor(private readonly config: ConfigService) {}
}
