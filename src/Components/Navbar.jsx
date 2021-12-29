import { Link } from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from "react-redux";
const Navbar = () => {
    const cartTotal = useSelector(state => state.cart.total)
    return  (
        <div style={{
            minHeight: "100px",
            width: "100%",
            display: "flex",
            gap:"20px"
        }}>
            <Link to="/">Homepage</Link>
            <Link to="/checkout">Checkout</Link>
            <div><ShoppingBasketIcon />{cartTotal}</div>
        </div>
    )
}

export default Navbar