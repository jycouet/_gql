import gql from 'graphql-tag';

export default gql`
  type Mutation {
    addUser(id: Int!, name: String!): String
    addMessage(idUser: Int!, content: String!): String
  }
`;
