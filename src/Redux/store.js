import { applyMiddleware, combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./Cart/cartReducer"
import productReducer from "./Products/productReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { createStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})

const composed = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composed)

