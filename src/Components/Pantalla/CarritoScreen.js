import React from "react";
import { FlatList, Text, View } from "react-native";
import { carritoJson } from "../../data/carrito";

export default function CarritoScreen() {
    return (
        <View>
            <FlatList
                data={carritoJson}
                renderItem={(data) => (
                    <View>
                        <Text>{data.item.nombre}</Text>
                        <Text>Cantidad: {data.item.cantidad}</Text>
                        <Text>{data.item.precio}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
