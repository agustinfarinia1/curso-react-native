import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoriaReducer from "./reducers/CategoriaReducer";
import PanReducer from "./reducers/PanReducer";
import thunk from "redux-thunk";
import CarritoReducer from "./reducers/CarritoReducer";

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    panes: PanReducer,
    carrito: CarritoReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
