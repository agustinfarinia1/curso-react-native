import { url } from "../../Constants/Database";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_ITEM = "CONFIRM_ITEM";

export const agregarItem = (item) => ({
    type: ADD_ITEM,
    item,
});

export const removerItem = (itemId) => ({
    type: REMOVE_ITEM,
    itemId,
});

export const confirmarCarrito = (payload, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url + "ordenes.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fecha: Date.now(),
                    carrito: payload,
                    total,
                }),
            });
            const result = await response.json();
            dispatch({
                type: CONFIRM_ITEM,
                confirm: true,
            });
        } catch (e) {
            console.log(e.message);
        }
    };
};
