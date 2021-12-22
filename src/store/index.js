import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoriaReducer from "./reducers/CategoriaReducer";
import ProductosReducer from "./reducers/ProductoReducer";
/*import CarritoReducer from "./reducers/CarritoReducer";*/
/*import thunk from "redux-thunk";*/

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    productos: ProductosReducer,
    /*carrito: CarritoReducer,*/
});

export default createStore(RootReducer);
