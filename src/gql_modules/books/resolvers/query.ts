import { getBooks } from "@books/bl/query/books";
import { getBook } from "@books/bl/query/book";
import { BookQueryArgs, BooksQueryArgs } from "@books/_gql/models";

export default {
  Query: {
    books: (root: any, args: BooksQueryArgs, ctx: any, info: any) => getBooks(args),
    book: (root: any, args: BookQueryArgs, ctx: any, info: any) => getBook(args)
  },
};
