import React, { useState } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { REMOVE_BOOK } from '../utils/mutations';

//import { getMe, deleteBook } from '../utils/API'; //this not
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {

   //Excute use Query hook to get the user informatio
   const {data} = useQuery(QUERY_ME);

   const user = data?.me || {};

   const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(user).length; 
  
  //Execute useMutation hook to REMOVE book inside user's data
  const [removeBookData] = useMutation(REMOVE_BOOK);


  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    
    console.log("estoy pasando por aqui");
    console.log(bookId);
    console.log(token);
    if (!token) {
      return false;
    }

    try {
     
      const { data } = await removeBookData({
        variables: {bookId: bookId}
      });

      // upon success, remove book's id from localStorage
      removeBookId(bookId);
      setUserData(data);
      window.location.reload('/saved')    //Added reload page route to render again the deletion
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {/* {userData.savedBooks.length */}
          {user.savedBooks.length
            ? `Viewing ${user.savedBooks.length} saved ${user.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {user.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {console.log(book)}
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {console.log(book.bookId)}
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
