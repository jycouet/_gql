import { BookQueryArgs, BooksQueryArgs } from '@books/_gql/models';
import { getBook } from '@books/bl/query/book';
import { getBooks } from '@books/bl/query/books';
import { IgqlContext } from 'src/gqlContext';

export default {
  Query: {
    books: (root: never, args: BooksQueryArgs, ctx: IgqlContext, info: never) => getBooks(args),
    book: (root: never, args: BookQueryArgs, ctx: IgqlContext, info: never) => getBook(args),
  },
};
