import { Book, BooksQueryArgs } from '@books/_gql/models';

export async function getBooks(args: BooksQueryArgs): Promise<Book[]> {
  return [{ id: 'book1', name: 'JYC' }, { id: 'book2', name: 'toto' }];
}
