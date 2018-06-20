import { Db } from "mongodb";
import { User, Message } from "@demo/_gql/models";
import { messagesCollection } from "@demo/connector/db/message";

export async function messages(root: User, db: Db): Promise<Message[]> {
  let objToRet: Message[] = [];
  const messages = await messagesCollection(db).find({ idUser: root.id }).toArray();
  messages.forEach((m: Message) => {
    objToRet.push({ author: { id: root.id, name: root.name, messages }, content: m.content })
  });
  return objToRet
}