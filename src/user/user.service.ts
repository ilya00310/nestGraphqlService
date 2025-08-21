import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getUser(id: number) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async getUsers() {
    return await this.prismaService.user.findMany();
  }

  async createUser(age: number, work: boolean) {
    return await this.prismaService.user.create({
      data: {
        age,
        work,
      },
    });
  }
}
