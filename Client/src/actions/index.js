import axios from 'axios';
import { FETCH_TODO, REMOVE_TODO } from './types';

const API = 'http://localhost:4000/api/todos';
export const fetchTodo = () => async dispatch => {
    var res = await axios.get(API);
    dispatch({ type: FETCH_TODO, payload: res });
}

export const removeTodo = (id) => async dispatch => {
    var id = await axios.delete(API, id);
    dispatch({ type: REMOVE_TODO, payload: id });

}
