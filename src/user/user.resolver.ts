import { Query, Resolver, Args, Int, Mutation } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { CreateUserArgs } from "./arguments/user_argument";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { name: "user" })
  async getUser(@Args("id", { type: () => Int }) id: number) {
    return await this.userService.getUser(id);
  }

  @Query(() => [User], { name: "users" })
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Mutation(() => User, { name: "user" })
  async createUser(@Args() args: CreateUserArgs) {
    const { age, work } = args;
    return await this.userService.createUser(age, work);
  }
}
