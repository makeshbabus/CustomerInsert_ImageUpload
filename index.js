/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const RNRedux = () => (
    <Provider store={ store }>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
