import React from "react";
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { panesJson } from "../../data/panes";
import { useNavigation } from "@react-navigation/native";

export function DetalleCategoria(props) {
    const arregloPanes = panesJson.filter(
        (p) => p.idCategoria == props.route.params.categoria
    );

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList
                data={arregloPanes}
                style={styles.FlatList}
                renderItem={(data) => (
                    <TouchableOpacity
                        style={styles.containerItem}
                        onPress={() =>
                            navigation.navigate("DetalleProducto", {
                                producto: data.item,
                                tituloDetalle: data.item.nombre,
                            })
                        }
                    >
                        <Text>{data.item.nombre}</Text>
                        <Text>Cantidad:{data.item.cantidad}</Text>
                        <Text>Precio: {data.item.precio}</Text>
                    </TouchableOpacity>
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
        backgroundColor: "black",
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
        width: "70%",
        height: 60,
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: "5%",
        backgroundColor: "lightgreen",
        borderRadius: 10,
    },
});
