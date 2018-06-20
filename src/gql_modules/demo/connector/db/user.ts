import { Db, Collection } from "mongodb";

export function usersCollection(db: Db): Collection<any> {
  return db.collection('users')
}