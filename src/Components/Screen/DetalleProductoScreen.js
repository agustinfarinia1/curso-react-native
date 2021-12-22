import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
/*import { agregarItem } from "../../store/actions/CarritoAction";*/

export function detalleProducto() {
    const producto = useSelector((state) => state.productos.seleccionado);
    const dispatch = useDispatch();

    /*const handlerAgregarCarrito = () => {
        dispatch(agregarItem(producto));
    };*/

    return (
        <View>
            <Text>{producto.nombre}</Text>
            <Text>{producto.descripcion}</Text>
            <Text>{producto.cantidad}</Text>
            <Text>{producto.precio}</Text>
            {/* <Button
                title="agregar al carrito"
                onPress={handlerAgregarCarrito}
            /> */}
        </View>
    );
}
