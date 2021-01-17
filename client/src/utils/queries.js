import gql from 'graphql-tag';

export const QUERY_ME = gql`
query{
    me {
        _id
        username
        email
        bookCount
        savedBooks
        {
          bookId
          title
          authors
          description
          image
          link
        }
    }
}
`;