import { createStore, combineReducers, compose } from 'redux'


import { filterStore } from './filterStore'

const rootReducer = combineReducers({
    filterStore
})

let composeEnhancers = compose

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}


const configureStore = () => {
    return createStore(rootReducer, composeEnhancers())
}

export default configureStore
