import C from './containers';
import {v4} from 'uuid';

export const category = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_CATEGORY:
            return {
                id: action.id,
                title: action.title,
                // price: action.price,
                // date:action.date,
                // category: action.category
            };
        default :
            return state
    }
}

export const categories = (state = [], action) => {
    switch (action.type) {
        case C.ADD_CATEGORY :
            return [
                ...state,
                category({}, action)
            ]
        case C.REMOVE_CATEGORY :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}
export const addCategory = (title) =>
    ({
        type: "ADD_CATEGORY",
        id: v4(),
        title
    })

export const removeCategory = id =>
    ({
        type: "REMOVE_CATEGORY",
        id
    })