import Checkout from "../Pages/Checkout"
import Homepage from "../Pages/Homepage"
import { Switch, Route } from "react-router-dom"

const AllRoutes = () => {
    return (
    <Switch>
        <Route exact path="/checkout">
            <Checkout />
        </Route>
        <Route exact path="/">
            <Homepage />
        </Route>
    </Switch>
    )
}

export default AllRoutes