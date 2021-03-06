import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

import App from './app/containers/App';
import registerServiceWorker from './registerServiceWorker';

import createSagaMiddleware from 'redux-saga'

import rootReducer from './app/reducers'
import rootSaga from './app/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
