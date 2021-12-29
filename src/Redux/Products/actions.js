import axios from "axios"

export const actionConstants = {
    GET_PRODUCT_REQUEST:"GET_PRODUCT_REQUEST",
    GET_PRODUCT_SUCCESS:"GET_PRODUCT_SUCCESS",
    GET_PRODUCT_FAILURE:"GET_PRODUCT_FAILURE"
}

// action creators

const getProductRequest = () => {
    return {
        type: actionConstants.GET_PRODUCT_REQUEST
    }
}

const getProductSuccess = (data) => {
    return {
        type: actionConstants.GET_PRODUCT_SUCCESS,
        payload: data
    }
}

const getProductFailure = () => {
    return {
        type: actionConstants.GET_PRODUCT_FAILURE
    }
}

export const getProduct = () => async (dispatch) => {
    dispatch(getProductRequest());
    await axios.get(`http://localhost:3000/products`)
    .then(res => dispatch(getProductSuccess(res.data)))
    .catch(err => dispatch(getProductFailure()))
}