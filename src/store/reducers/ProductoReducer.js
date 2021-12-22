import { productosJson } from "../../data/productos";
import { PROD_FILT, PROD_SELEC } from "../actions/ProductoAction";

const initialState = {
    productos: productosJson,
    productosFiltrados: [],
    seleccionado: null,
};

const ProductosReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROD_SELEC:
            return {
                ...state,
                seleccionado: state.productos.find(
                    (prod) => prod.id === action.idProd.id
                ),
            };
        case PROD_FILT:
            return {
                ...state,
                productosFiltrados: state.productos.filter(
                    (prod) => prod.idCategoria === action.idCategoria
                ),
            };
        default:
            return state;
    }
};

export default ProductosReducer;
