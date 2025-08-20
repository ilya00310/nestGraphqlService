import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  age: number;

  @Field((type) => Boolean)
  work?: boolean;
}
