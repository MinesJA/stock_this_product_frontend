// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
// COMPONENTS
import App from './App';
// STYLING
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

console.log("Initial State from Index: ", store.getState())


ReactDOM.render(

    <Router>
      <Provider store={store} >
        <App />
      </Provider>
    </Router>
  ,
  document.getElementById('root'));

registerServiceWorker();
