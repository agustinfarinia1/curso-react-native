import { panesJson } from "../../data/panes";
import { PAN_FILT, PAN_SELEC } from "../actions/PanAction";

const initialState = {
    panes: panesJson,
    panesFiltrados: [],
    seleccionado: null,
};

const PanReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAN_SELEC:
            return {
                ...state,
                seleccionado: state.panes.find(
                    (pan) => pan.id === action.idPan.id
                ),
            };
        case PAN_FILT:
            return {
                ...state,
                panesFiltrados: state.panes.filter(
                    (pan) => pan.idCategoria === action.idCategoria
                ),
            };
        default:
            return state;
    }
};

export default PanReducer;
