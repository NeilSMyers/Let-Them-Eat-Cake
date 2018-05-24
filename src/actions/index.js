import {
    FETCH_CAKES
} from './types';

import axios from 'axios';

export function fetchCake() {
    return function (dispatch) {
        axios.get('http://localhost:5000/cakes')
            .then(response => {
                dispatch({
                    type: FETCH_CAKES,
                    payload: response.data
                })
            })
    }
}