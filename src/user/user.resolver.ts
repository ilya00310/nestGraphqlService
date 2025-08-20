import { Query, Resolver, Args, Int } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { name: "user" })
  async getUser(@Args("id", { type: () => Int }) id: number) {
    return this.userService.getUser(id);
  }

  @Query(() => User, { name: "users" })
  async getUsers() {
    return this.userService.getUsers();
  }
}
