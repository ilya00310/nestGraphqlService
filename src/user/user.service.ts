import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor() {}

  async getUser(id: number) {
    return { id: 1, age: 25 };
  }

  async getUsers() {
    return [
      { id: 1, age: 25, work: false },
      { id: 2, age: 45, work: true },
    ];
  }
}
