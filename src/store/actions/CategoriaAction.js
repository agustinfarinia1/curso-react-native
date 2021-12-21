export const CAT_SELEC = "CAT_SELEC";

export const categoriaSeleccionada = (id) => ({
    type: CAT_SELEC,
    idCategoria: id,
});
