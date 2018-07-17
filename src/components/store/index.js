import {  createStore, combineReducers, applyMiddleware,compose } from 'redux'
import {products,addProduct} from '../product/products'
import { categories} from "../category/category";

export const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

export const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

export const store = applyMiddleware(logger,saver)(createStore)(
    combineReducers({ products,categories }),
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        {}
)



export const populate = compose(
    () => console.log('products coung', store.getState().products.length),
    () => store.dispatch(addProduct("Big Blue")),
    //() => store.dispatch(addCategory("B12121212")),
    () => store.dispatch(addProduct("Tomato")),
    () => store.dispatch(addProduct("lawn")),
    () => store.dispatch(addProduct("Party Pink"))
)

