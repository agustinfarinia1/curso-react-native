import React, { useEffect } from "react";
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { panSeleccionado, panesFiltrados } from "../../store/actions/PanAction";

export function Panes() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const categoria = useSelector((state) => state.categorias.seleccionado);
    const arregloPanes = useSelector((state) => state.panes.panesFiltrados);

    useEffect(() => {
        dispatch(panesFiltrados(categoria.id));
    }, []);

    const handlerPanSeleccionado = (pan) => {
        dispatch(panSeleccionado(pan));
        navigation.navigate("DetalleProducto", {
            tituloDetalle: pan.nombre,
        });
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={arregloPanes}
                style={styles.FlatList}
                renderItem={(data) => (
                    <TouchableOpacity
                        style={styles.containerItem}
                        onPress={() => handlerPanSeleccionado(data.item)}
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
