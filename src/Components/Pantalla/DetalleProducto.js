import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { agregarItem } from "../../store/actions/CarritoAction";

export function DetalleProducto() {
    const producto = useSelector((state) => state.panes.seleccionado);
    const dispatch = useDispatch();

    const handlerAgregarCarrito = () => {
        dispatch(agregarItem(producto));
    };

    return (
        <View>
            <Text>{producto.nombre}</Text>
            <Text>{producto.cantidad}</Text>
            <Text>{producto.precio}</Text>
            <Button
                title="agregar al carrito"
                onPress={handlerAgregarCarrito}
            />
        </View>
    );
}
