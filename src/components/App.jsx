import React, {useEffect} from "react";
import {Container} from "semantic-ui-react";
import {Card} from "semantic-ui-react";
import axios from "axios";
import Filter from  "../containers/Filter"
import Menu from  "../containers/Menu"

import BookCart from "../containers/BookCart";
import "../style.css"



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
      <Menu />
      <Filter />
      <Card.Group itemsPerRow={4}>
          {!isReady ? "Loading... " : books.map((book, index) => (
           <BookCart key={index}{...book}/>
          ))}
      </Card.Group>
    </Container>
  );
}

export default App;
