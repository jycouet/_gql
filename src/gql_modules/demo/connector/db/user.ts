import { Collection, Db } from 'mongodb';

export function usersCollection(db: Db): Collection<any> {
  return db.collection('users');
}
