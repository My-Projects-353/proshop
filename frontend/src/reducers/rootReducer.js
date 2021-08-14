import { combineReducers  } from 'redux'
import { cartReducer } from './cartReducers'
import {productlistReducer , productDetailsReducer} from './productReducers'


const rootReducer = combineReducers({
    productList: productlistReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
})
 

export default rootReducer