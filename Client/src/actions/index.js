import axios from 'axios';
import FETCH_USER from './types';

const fetchUser = () => {
    axios.get('http://localhost:4000/api/todos');
};