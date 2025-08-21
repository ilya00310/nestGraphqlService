import { Int, ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateUserArgs {
  @Field(() => Int)
  age: number;

  @Field(() => Boolean)
  work: boolean;
}
