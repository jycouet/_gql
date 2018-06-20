import { AddUserMutationArgs } from '@demo/_gql/models';
import { usersCollection } from '@demo/connector/db/user';
import { Db } from 'mongodb';

export async function addUser(args: AddUserMutationArgs, db: Db): Promise<string> {
  await usersCollection(db).insert({ id: args.id, name: args.name });
  return `user ${args.name} added`;
}
