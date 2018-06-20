import { Db } from "mongodb";
import { User, Message } from "@demo/_gql/models";

export async function messages(root: User, db: Db): Promise<Message[]> {
  let objToRet: Message[] = [];
  const messages = await db.collection('messages').find({ idUser: root.id }).toArray();
  messages.forEach((m: Message) => {
    objToRet.push({ author: { id: root.id, name: root.name, messages }, content: m.content })
  });
  return objToRet
}