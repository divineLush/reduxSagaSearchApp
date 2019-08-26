import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import './App.css';
import Root from './components/Root';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Root />
      </Provider>
    )
  }
}
