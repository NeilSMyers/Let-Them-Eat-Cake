import { FETCH_CAKES } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CAKES:
            console.log(action.payload)
            return [...state, ...action.payload]

        default: return state
    }
}