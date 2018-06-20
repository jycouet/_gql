import gql from 'graphql-tag';

export default gql`
  type User {
    id: Int!
    name: String!
    messages: [Message]!
  }
`;
