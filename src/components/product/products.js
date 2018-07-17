import C from './containers';
import {v4} from 'uuid';
export const product = (state = {}, action) => {

    switch (action.type) {
        case C.ADD_PRODUCT:
            return {
                id: action.id,
                title: action.title,
                price: action.price,
                date:action.date,
                category: action.category
            };
        default :
            return state
    }
}

export const products = (state = [], action) => {
    switch (action.type) {
        case C.ADD_PRODUCT :
        return [
            ...state,
            product({}, action)
        ]
        case C.REMOVE_PRODUCT :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}
export const addProduct = (title,price,date,category) =>
    ({
        type: "ADD_PRODUCT",
        id: v4(),
        title,
        price,
        date,
        category
    })

export const removeProduct = id =>
    ({
        type: "REMOVE_PRODUCT",
        id
    })