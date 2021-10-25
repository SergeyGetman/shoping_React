const initialState = {
  items : []
}

export default (state = initialState, action) => {

  switch (action.type){
    case  "ADD_TO_CART" :
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]

      };
    case "REMOVE_FROM_CART" :
      return {
        ...state,
       items: state.items.filter(elem => elem.id != action.payload)
      }
      break;

    default : return state;
  }
}