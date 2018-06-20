import gql from 'graphql-tag';

export default gql`
  type Book @entity {
    id: ID! @id
    name: String! @column
  }
`;
