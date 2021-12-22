import React from "react";
import { Button, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { carritoJson } from "../../data/carrito";
/*import {
    confirmarCarrito,
    removerItem,
} from "../../store/actions/CarritoAction";*/

export default function CarritoScreen() {
    /*const carrito = useSelector((state) => state.carrito.carrito);
    const total = useSelector((state) => state.carrito.total);
    const dispatch = useDispatch();*/

    /*const handlerRemoverCarrito = (item) => {
        dispatch(removerItem(item.id));
    };

    const handlerConfirmarCarrito = () => {
        if (carrito.length > 0) {
            dispatch(confirmarCarrito(carrito, total));
        }
    };*/

    const carrito = carritoJson;
    const total = 2700;

    return (
        <View>
            <FlatList
                data={carrito}
                renderItem={(data) => (
                    <View>
                        <Text>{data.item.nombre}</Text>
                        <Text>Cantidad: {data.item.cantidad}</Text>
                        <Text>{data.item.precio}</Text>
                        {/* <Button
                            title="removerCarrito"
                            onPress={() => handlerRemoverCarrito(data.item)}
                        /> */}
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <Text>Total:{total}</Text>
            {/* <Button
                title="ConfirmarCarrito"
                onPress={handlerConfirmarCarrito}
            /> */}
        </View>
    );
}
