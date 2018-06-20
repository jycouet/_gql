import { AddUserMutationArgs } from "@demo/_gql/models";
import { Db } from "mongodb";

export async function addUser(args: AddUserMutationArgs, db: Db): Promise<string> {
  await db.collection('users').insert({ id: args.id, name: args.name });
  return `user ${args.name} added`;
}