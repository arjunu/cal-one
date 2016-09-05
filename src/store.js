import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createReducer from './createReducer';
import {fromJS} from 'immutable';

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);

        return result;
    };
};

function getInitialStateFromLocalStorage() {
    const applicationState = localStorage.getItem('applicationState');

    if (!applicationState)
        return undefined;

    return applicationState;
}

export default function configureStore(history) {
    const router = routerMiddleware(history);

    const enhancer = compose(
        applyMiddleware(router, localStorageMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    const store = createStore(createReducer(), getInitialStateFromLocalStorage(), enhancer);

    store.asyncReducers = {}; // Async reducer registry

    return store;
}