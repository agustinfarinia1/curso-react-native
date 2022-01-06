export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAN_CART = "CLEAN_CART";

export const agregarItem = (item) => ({
    type: ADD_ITEM,
    item,
});

export const removerItem = (itemId) => ({
    type: REMOVE_ITEM,
    itemId,
});
export const vaciarCarrito = () => ({
    type: CLEAN_CART,
});
