import React from "react";
import { Text, View } from "react-native";

export function DetalleProducto(props) {
    console.log(props.route.params.producto);
    return (
        <View>
            <Text>{props.route.params.producto.nombre}</Text>
            <Text>{props.route.params.producto.cantidad}</Text>
            <Text>{props.route.params.producto.precio}</Text>
        </View>
    );
}
