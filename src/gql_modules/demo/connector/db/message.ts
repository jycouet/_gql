import { Message } from '@demo/_gql/models';
import { Collection, Db } from 'mongodb';

export function messagesCollection(db: Db): Collection<Message> {
  return db.collection('messages');
}
