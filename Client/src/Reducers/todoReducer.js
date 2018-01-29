import * as _ from 'lodash';
import { FETCH_TODO, REMOVE_TODO, ADD_TODO } from '../actions/types';
export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_TODO: {
            return action.payload;
        }
        case REMOVE_TODO: {
            return Object.assign({}, state, {todo: {}});
        }
        case ADD_TODO: {
           
        }
        default:
            return state;
    }
}