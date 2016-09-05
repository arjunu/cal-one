import * as React from "react";
import './fonts/FlatIcons/flaticon.css';
import 'babel-polyfill';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {browserHistory, Router} from 'react-router';
import configureStore from "./store.js";
import {syncHistoryWithStore} from 'react-router-redux';
import createRoutes from './routes';
import App from './containers/App/App.js';
import BasicCalculatorPage from './pages/BasicCalculatorPage/BasicCalculatorPage';

export const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const rootRoute = {
    path: '/',
    component: App,
    indexRoute: {
        component: BasicCalculatorPage
    },
    childRoutes: createRoutes(store)
};

render(
    <Provider store={store}>
        <Router routes={rootRoute} history={history}/>
    </Provider>,
    document.getElementById('root')
);