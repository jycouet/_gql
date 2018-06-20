import { Db } from "mongodb";
import { UserQueryArgs, User } from "@demo/_gql/models";

export async function user(args: UserQueryArgs, db: Db): Promise<User | null> {
  let users = await db.collection('users').find({ id: args.id }).toArray();
  if (users && users.length > 0) {
    return users[0];
  }
  return null;
}