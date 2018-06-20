import { Db } from "mongodb";
import { UserQueryArgs, User } from "@demo/_gql/models";
import { usersCollection } from "@demo/connector/db/user";

export async function user(args: UserQueryArgs, db: Db): Promise<User | null> {
  let users = await usersCollection(db).find({ id: args.id }).toArray();
  if (users && users.length > 0) {
    return users[0];
  }
  return null;
}