import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { panesJson } from "../../data/panes";

export function DetalleProducto(props) {
    const arregloPanes = panesJson.filter(
        (p) => p.idCategoria == props.route.params.categoria
    );
    console.log(arregloPanes);
    return (
        <View style={styles.container}>
            <FlatList
                data={arregloPanes}
                style={styles.FlatList}
                renderItem={(data) => (
                    <View style={styles.containerItem}>
                        <Text>{data.item.nombre}</Text>
                        <Text>{data.item.precio}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
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
    FlatList: {
        width: "90%",
        height: "90%",
        marginTop: "1%",
        borderColor: "grey",
        borderWidth: 1,
    },
    containerItem: {
        width: "90%",
        height: 60,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "5%",
        backgroundColor: "lightgreen",
        borderRadius: 10,
    },
});
