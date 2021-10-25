const initialState = {
  items : [
    {
      "id": 0,
      "title": "The Definitive Guide to MongoDB, 3rd Edition",
      "author": "Covers MongoDB version 3.0",
      "image": "https://itbook.store/img/books/9781484211830.png",
      "price": 710,
      "rating": 3
    },
    {
      "id": 0,
      "title": "The Definitive Guide to MongoDB, 3rd Edition",
      "author": "Covers MongoDB version 3.0",
      "image": "https://itbook.store/img/books/9781484211830.png",
      "price": 710,
      "rating": 3
    },
    {
      "id": 0,
      "title": "The Definitive Guide to MongoDB, 3rd Edition",
      "author": "Covers MongoDB version 3.0",
      "image": "https://itbook.store/img/books/9781484211830.png",
      "price": 710,
      "rating": 3
    },
  ]
}

export default (state = initialState, action) => {

  switch (action.type){
    case  "ADD_BOOK" :
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]

      };
    case "REMOVE_BOOK" :
      return {
        ...state,
       items: state.items.filter(elem => elem.id != action.payload)
      }
      break;

    default : return state;
  }
}