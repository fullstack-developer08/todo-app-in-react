import axios from 'axios';
import { FETCH_TODO, REMOVE_TODO, ADD_TODO } from './types';

const API = 'http://localhost:4000/api/todos';
export const fetchTodo = () => async dispatch => {
    var res = await axios.get(API);
    dispatch({ type: FETCH_TODO, payload: res });
}

export const removeTodo = _id => async dispatch => {
    var id = await axios.delete(API + '/' + _id);
    dispatch({ type: REMOVE_TODO, payload: id });
}

export const addTodo = todo => async dispatch => {
    var addedTodo = await axios.post(API, todo);
    dispatch({ type: ADD_TODO, payload: addedTodo });
}
