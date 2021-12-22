export const PROD_SELEC = "PROD_SELEC";
export const PROD_FILT = "PROD_FILT";

export const productoSeleccionado = (id) => ({
    type: PROD_SELEC,
    idProd: id,
});

export const productosFiltrados = (id) => ({
    type: PROD_FILT,
    idCategoria: id,
});
