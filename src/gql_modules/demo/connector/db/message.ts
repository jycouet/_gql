import { Db, Collection } from "mongodb";

export function messagesCollection(db: Db): Collection<any> {
  return db.collection('messages')
}