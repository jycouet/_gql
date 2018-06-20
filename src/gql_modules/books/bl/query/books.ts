import { BooksQueryArgs, Book } from "@books/_gql/models";

export async function getBooks(args: BooksQueryArgs): Promise<Book[]> {
  console.log('args', args);
  return [{ id: 'book1', name: 'JYC' }, { id: 'book2', name: 'toto' }];
}