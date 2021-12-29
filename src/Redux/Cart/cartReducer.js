import { actionConstants } from "./actions"

const initState = {
    isLoading: false,
    isError: false,
    cart: [],
    total: 0,
    totalPrice: 0,
    orderPlaced: false
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.GET_CART_REQUEST: 
            return {
                ...state,
                isLoading: true,            
            }
        case actionConstants.GET_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                cart: action.payload
            }
        case actionConstants.GET_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,                
            }
        case actionConstants.ADD_CART_REQUEST: 
        return {
            ...state,
            isLoading: true,            
        }
        case actionConstants.ADD_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                // cart: [...state.cart, action.payload],
                total: Number(state.total) + Number(action.payload.quantity),
                totalPrice: Number(state.totalPrice) + Number(action.payload.price),
            }
        case actionConstants.ADD_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,                
            }
            case actionConstants.PLACE_ORDER_REQUEST: 
            return {
                ...state,
                isLoading: true,            
            }
            case actionConstants.PLACE_ORDER_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    orderPlaced: !state.orderPlaced
                }
            case actionConstants.PLACE_ORDER_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,                
                }
        default:
            return state
    }
}

export default cartReducer