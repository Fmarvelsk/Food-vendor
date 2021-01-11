import { createStore, combineReducers, compose } from 'redux'


import { filterStore, Carts } from './filterStore'

const rootReducer = combineReducers({
    filterStore,
    Carts
})

let composeEnhancers = compose

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}


const configureStore = () => {
    return createStore(rootReducer, composeEnhancers())
}

export default configureStore
