import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($title: String!, $authors: [String], $description: String!, $bookId: String!, $image: String!, $link: String!) {
    saveBook(title: $title, authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link) {     
				_id
      	email
      username
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($id: String!) {
    removeBook(id: $id) {
      _id
      username
      email
    }
  }
`;