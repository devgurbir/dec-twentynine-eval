import axios from "axios"

export const actionConstants = {
    GET_CART_REQUEST:"GET_CART_REQUEST",
    GET_CART_SUCCESS:"GET_CART_SUCCESS",
    GET_CART_FAILURE:"GET_CART_FAILURE",
    ADD_CART_REQUEST:"ADD_CART_REQUEST",
    ADD_CART_SUCCESS:"ADD_CART_SUCCESS",
    ADD_CART_FAILURE:"ADD_CART_FAILURE",
    PLACE_ORDER_REQUEST:"PLACE_ORDER_REQUEST",
    PLACE_ORDER_SUCCESS:"PLACE_ORDER_SUCCESS",
    PLACE_ORDER_FAILURE:"PLACE_ORDER_FAILURE"
}

// action creators

// add to cart
const addCartRequest = () => {
    return {
        type: actionConstants.ADD_CART_REQUEST
    }
}

const addCartSuccess = (quantity, price) => {
    return {
        type: actionConstants.ADD_CART_SUCCESS,
        payload: {
            quantity: Number(quantity),
            price: Number(price)
        }
    }
}

const addCartFailure = () => {
    return {
        type: actionConstants.ADD_CART_FAILURE
    }
}

// get cart
const getCartRequest = () => {
    return {
        type: actionConstants.GET_CART_REQUEST
    }
}

const getCartSuccess = (data) => {
    return {
        type: actionConstants.GET_CART_SUCCESS,
        payload: data
    }
}

const getCartFailure = () => {
    return {
        type: actionConstants.GET_CART_FAILURE
    }
}

// update quantity action creators

const placeOrderRequest = () => {
    return {
        type: actionConstants.PLACE_ORDER_REQUEST
    }
}

const placeOrderSuccess = (num) => {
    return {
        type: actionConstants.PLACE_ORDER_SUCCESS,
        payload: num
    }
}

const placeOrderFailure = () => {
    return {
        type: actionConstants.PLACE_ORDER_FAILURE
    }
}

// add to cart thunk

export const addToCart = (name, quantity, description, price) => async (dispatch) => {
    dispatch(addCartRequest());
    await axios.post("http://localhost:3000/cart", {
        name: name,
        quantity: quantity,
        description: description,
        
    })
    .then( res => {
        console.log("Added to cart: ", name)
        console.log(price, typeof price)
        dispatch(addCartSuccess(quantity, price))
    })
    .catch(err => {
        console.log(err)
        dispatch(addCartFailure())
    })
    
}

// get cart thunk
export const getCart = () => async (dispatch) => {
    dispatch(getCartRequest());
    await axios.get(`http://localhost:3000/cart`)
    .then(res => dispatch(getCartSuccess(res.data)))
    .catch(err => dispatch(getCartFailure()))
}

// place order thunk 

export const placeOrder = (name, quantity, description, totalPrice) => async (dispatch) => {
    dispatch(placeOrderRequest());
    await axios.post("http://localhost:3000/order", {
        name: name,
        quantity: quantity,
        description: description,
        totalPrice        
    })
    .then( res => {
        alert("Order placed")
        dispatch(placeOrderSuccess())
    })
    .catch(err => {
        console.log(err)
        dispatch(placeOrderFailure())
    })
    
}
