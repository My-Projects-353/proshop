import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'




const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart : { cartItems: cartItemsFromStorage }
}

const middleWare =[thunk]

const store = createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleWare)))





export default store