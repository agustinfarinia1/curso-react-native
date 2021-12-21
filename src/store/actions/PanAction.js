export const PAN_SELEC = "PAN_SELEC";
export const PAN_FILT = "PAN_FILT";

export const panSeleccionado = (id) => ({
    type: PAN_SELEC,
    idPan: id,
});

export const panesFiltrados = (id) => ({
    type: PAN_FILT,
    idCategoria: id,
});
