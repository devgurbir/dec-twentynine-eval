import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { getCart, placeOrder } from '../Redux/Cart/actions';

const Checkout = () => {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getCart())
    }, [])

    const cart = useSelector(state => state.cart.cart)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const orderPlaced = useSelector(state => state.cart.orderPlaced)

    const handlePlaceOrder = () => {
        dispatch(placeOrder())
    }

    if(orderPlaced){
        return <Redirect to="/" />
    }

    return (
        <div>
            <h5>Total Price: {totalPrice}</h5>
            {cart.length > 0 ? <button onClick={handlePlaceOrder}>Place Order</button> : <div>Cart empty</div>}
            {cart?.map(item => {
                return (
                    <div style={{border:"1px solid black", marginTop:"30px", display: "flex", flexDirection: "column", gap:"10px", padding:"10px"}}>
                    <div>{item.name}</div>
                    <div>{item.quantity}</div>
                    <div>{item.description}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Checkout
