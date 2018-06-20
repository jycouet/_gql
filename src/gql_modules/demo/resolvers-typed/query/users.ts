import { User } from '@demo/_gql/models';
import { usersCollection } from '@demo/connector/db/user';
import { Db } from 'mongodb';

export async function users(db: Db): Promise<User[]> {
  return usersCollection(db)
    .find()
    .toArray();
}
