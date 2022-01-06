import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export function OrdenesScreen({ ordenes }) {
    return (
        <View style={styles.container}>
            {ordenes ? (
                <>
                    <FlatList
                        data={ordenes}
                        style={styles.FlatList}
                        renderItem={(data) => (
                            <View style={styles.containerItem}>
                                <Text>Fecha:{data.item.fecha}</Text>

                                <Text>
                                    Cantidad de Productos:
                                    {data.item.productos.length}
                                </Text>

                                <Text>Monto Orden:{data.item.precioTotal}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </>
            ) : (
                <>
                    <Text style={styles.text}>El usuario no tiene ordenes</Text>
                </>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    FlatList: {
        width: "90%",
        height: "90%",
        marginTop: "1%",
        borderColor: "grey",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 10,
    },
    containerItem: {
        width: "90%",
        height: 60,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "2%",
        backgroundColor: "lightgreen",
        borderRadius: 10,
    },
});
