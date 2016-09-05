import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default function createReducer(asyncReducers) {
    const appReducer = combineReducers({
        routing: routerReducer,
        //write synchronous reducers above this line
        ...asyncReducers
    });

    return (state, action) => {
        if (action.type === "ACTION_CLEAR_STORE") {
            state = undefined;
        }
        return appReducer(state, action)
    };

};
