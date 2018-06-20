import { Message } from "@demo/_gql/models";

export async function formatedContent(root: Message): Promise<string> {
  return `${root.author.name} - ${root.content}`;
}