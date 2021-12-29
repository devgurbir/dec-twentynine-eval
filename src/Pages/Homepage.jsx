import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/Products/actions'
import Product from '../Components/Product'
import Box from '@mui/material/Box';

const Homepage = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getProduct());
    }, [])

    const products = useSelector(state => state.products.products)
    return (
        <>
        <h3>Products</h3>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap:"20px",
        }}>
            {products?.map(item => {
                return <Product price={item.price} key={item.id} title={item.name} id={item.id} description={item.description} />
            })}
        </Box>
        </>
    )
}

export default Homepage
