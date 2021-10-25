import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../actions/cart";
import Menu from "../components/Menu";



const mapStateToProps = ({cart}) => ({
 totalPrice : cart.items.reduce((a,b) => a + b.price, 0),
  count : cart.items.length
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

