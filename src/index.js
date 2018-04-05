// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
// COMPONENTS
import App from './App';
// STYLING
import './index.css';




ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>
  ,
  document.getElementById('root'));

registerServiceWorker();
