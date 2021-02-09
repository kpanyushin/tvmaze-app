import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { createRootReducer, rootSaga } from './_redux';
import App from './components/App';
import routes from './routes';

import './styles/index.scss';
import './styles/normalize.scss';

const sagaMiddlare = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
  }),
  sagaMiddlare,
];
const store = configureStore({
  middleware,
  devTools: process.env.NODE_ENV === 'development',
  reducer: createRootReducer(),
});
sagaMiddlare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App routes={routes} />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);
