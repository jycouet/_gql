import gql from 'graphql-tag';

export default gql`
  type Message {
    content: String
    author: User!
    formatedContent: String
  }
`;
