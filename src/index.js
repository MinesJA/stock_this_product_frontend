// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// COMPONENTS
import App from './App';
// STYLING
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

console.log(store.getState())


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
