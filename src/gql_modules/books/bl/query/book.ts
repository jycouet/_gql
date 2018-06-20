import { Book, BookQueryArgs } from "@books/_gql/models";

export async function getBook(args: BookQueryArgs): Promise<Book | null> {
  console.log('args', args);
  if (args.id === 'book1') {
    return { id: 'book1', name: 'JYC' };
  } else if (args.id === 'book2') {
    return { id: 'book2', name: 'toto' };
  }
  return null
}