import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { agregarItem } from "../../store/actions/CarritoAction";

export function detalleProducto() {
    const producto = useSelector((state) => state.productos.seleccionado);
    const dispatch = useDispatch();

    const handlerAgregarCarrito = () => {
        dispatch(agregarItem(producto));
    };

    return (
        <View style={styles.container}>
            <Text>{producto.nombre}</Text>
            <Text>{producto.descripcion}</Text>
            <Text>{producto.cantidad}</Text>
            <Text>{producto.precio}</Text>
            <Button
                title="agregar al carrito"
                onPress={handlerAgregarCarrito}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
});
