import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import redux_thunk from "redux-thunk";

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, {}, applyMiddleware(redux_thunk));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// console.log("Stripe public key:", process.env.REACT_APP_STRIPE_PUBLIC_KEY);
// console.log("Environment :", process.env.NODE_ENV);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
