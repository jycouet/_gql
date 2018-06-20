import gql from 'graphql-tag';

export default gql`
  type Query {
    users: [User]
    user(id: Int!): User
    version: String
  }
`;
