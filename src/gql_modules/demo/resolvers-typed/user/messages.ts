import { Message, User } from '@demo/_gql/models';
import { messagesCollection } from '@demo/connector/db/message';
import { Db } from 'mongodb';

export async function messages(root: User, db: Db): Promise<Message[]> {
  const objToRet: Message[] = [];
  const messageList = await messagesCollection(db)
    .find({ idUser: root.id })
    .toArray();
  messageList.forEach((m: Message) => {
    objToRet.push({ author: { id: root.id, name: root.name, messages: messageList }, content: m.content });
  });
  return objToRet;
}
