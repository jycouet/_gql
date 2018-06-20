import { User } from '@demo/_gql/models';
import { Collection, Db } from 'mongodb';

export function usersCollection(db: Db): Collection<User> {
  return db.collection('users');
}
