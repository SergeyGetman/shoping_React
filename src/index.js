import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'semantic-ui-css/semantic.min.css'
import createStore from "./store";
import App from './containers/App';
const store = createStore();


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,


  document.getElementById('root')
);


