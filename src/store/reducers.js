import { DATA_RECIEVED } from './actions';
import { combineReducers } from 'redux';

const initialState = { data: [] }

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_RECIEVED:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({ dataReducer })

export default rootReducer;