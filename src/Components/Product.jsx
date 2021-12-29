import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Cart/actions';
import { Typography } from '@mui/material';

const Product = ({title, description, id, price}) => {
    const [individualQty, setIndividualQty] = useState(0);
    const dispatch = useDispatch();
    
    description = description.slice(0, 100)
    const handleCart = (qty, price) => {
        setIndividualQty(prev => prev + qty)
        dispatch(addToCart(title, qty, description, price))
    }
    return (
        <Box sx={{
            flexBasis: "30%",
        }}>
            <Paper sx={{
                minHeight: "200px",
                padding: "20px"
            }}>
                <div style={{marginBottom: "20px"}}>{title}</div>
                <Typography sx={{marginBottom: "20px"}}>{description}...</Typography>
                <Typography sx={{marginBottom: "20px"}}>Price: {price}</Typography>
                <div><button  onClick={ () => handleCart(-1, price) }>-</button><span>{individualQty}</span>
                <button onClick={ () => handleCart(1, price) }>+</button></div>
            </Paper>
        </Box>
    )
}

export default Product
