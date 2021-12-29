import { actionConstants } from "./actions"

const initState = {
    isLoading: false,
    isError: false,
    products: []
}

const productReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.GET_PRODUCT_REQUEST: 
            return {
                ...state,
                isLoading: true,            
            }
        case actionConstants.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload
            }
        case actionConstants.GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,                
            }
        default:
            return state
    }
}

export default productReducer