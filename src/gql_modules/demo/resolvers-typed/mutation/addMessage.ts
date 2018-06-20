import { AddMessageMutationArgs } from '@demo/_gql/models';
import { messagesCollection } from '@demo/connector/db/message';
import { Db } from 'mongodb';

export async function addMessage(args: AddMessageMutationArgs, db: Db): Promise<string> {
  await messagesCollection(db).insert({ idUser: args.idUser, content: args.content });
  const version = '1';
  // const version = await info.mergeInfo.delegateToSchema({
  //   schema: schemas,
  //   operation: 'query',
  //   fieldName: `

  //   `,
  //   args: {
  //     id: args.idUser,
  //   },
  //   ctx,
  //   info
  // });
  return `message ${args.content} added in version: ${version}`;
}
