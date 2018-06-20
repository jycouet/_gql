import gql from 'graphql-tag';

export default gql`
  type Query {
    books(search: String): [Book]
    book(id: String!): Book
  }
`;
