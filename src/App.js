import React from "react";
import {connect} from "react-redux";
import {setBooks} from "./actions/books";



function App(props) {
  console.log(props)
  const {books} = props.books
  const {setBooks} = props
  const newBooks = [{
    id : 1,
    title : " Новое время: " + new Date()
  }]
  return (
    <div className="App">
      <h1>Привет {books[0].title} </h1>
      <button onClick={setBooks.bind(this, newBooks)}>SET new BOOKS</button>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
setBooks : books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
