import {combineReducers} from "redux"
import {productReducer,selecteProductReducer} from "./productsReducer"

const reducers=combineReducers({
    products:productReducer,
    product:selecteProductReducer,
})

export default reducers