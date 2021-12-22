import { categoriasJson } from "../../data/categorias";
import { CAT_SELEC } from "../actions/CategoriaAction";

const initialState = {
    categorias: categoriasJson,
    seleccionado: null,
};

const CategoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAT_SELEC:
            const indexCategoria = state.categorias.findIndex(
                (cat) => cat.id === action.idCategoria
            );
            return indexCategoria === -1
                ? state
                : { ...state, seleccionado: state.categorias[indexCategoria] };
        default:
            return state;
    }
};

export default CategoriaReducer;
