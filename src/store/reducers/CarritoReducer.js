import { ADD_ITEM, REMOVE_ITEM, CLEAN_CART } from "../actions/CarritoAction";

const initialState = {
    carrito: [],
    total: 0,
};

function sumTotal(list) {
    return list
        .map((item) => item.cantidad * item.precio)
        .reduce((a, b) => a + b, 0);
}

const CarritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let carritoActualizado = [];
            if (state.carrito.find((item) => item.id === action.item.id)) {
                carritoActualizado = state.carrito.map((item) => {
                    if (item.id === action.item.id) item.cantidad++;
                    return item;
                });
            } else {
                const item = { ...action.item, cantidad: 1 };
                carritoActualizado = [...state.carrito, item];
            }
            return {
                ...state,
                carrito: carritoActualizado,
                total: sumTotal(carritoActualizado),
            };
        case REMOVE_ITEM:
            const carritoFiltrado = state.carrito.filter(
                (item) => item.id !== action.itemId
            );
            return {
                ...state,
                carrito: carritoFiltrado,
                total: sumTotal(carritoFiltrado),
            };
        case CLEAN_CART:
            return { ...state, carrito: [] };
        default:
            return state;
    }
};

export default CarritoReducer;
