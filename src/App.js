import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import {Container} from "semantic-ui-react";
import {Card} from "semantic-ui-react";
import axios from "axios";
import MenuComponents from "./components/Menu";
import BookCart from "./components/BookCart";
import "./style.css"



function App(props) {

  const {setBooks, isReady} = props

  useEffect(() => {
    axios.get("/books.json").then(({data}) => {
      setBooks(data)
    })
  }, []);


  const {books} = props;

  return (

    <Container>
      <MenuComponents />
      <Card.Group itemsPerRow={4}>
          {!isReady ? "Loading... " : books.map(book => (
           <BookCart {...book}/>
          ))}
      </Card.Group>
    </Container>
  );
}

const mapStateToProps = ({books}) => ({
  books: books.items,
  isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
