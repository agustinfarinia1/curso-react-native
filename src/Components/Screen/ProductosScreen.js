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
import {
    productoSeleccionado,
    productosFiltrados,
} from "../../store/actions/ProductoAction";

export function productoScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const categoria = useSelector((state) => state.categorias.seleccionado);
    const arregloProductos = useSelector(
        (state) => state.productos.productosFiltrados
    );

    useEffect(() => {
        dispatch(productosFiltrados(categoria.id));
    }, []);

    const handlerProductoSeleccionado = (producto) => {
        dispatch(productoSeleccionado(producto));
        navigation.navigate("DetalleProductoScreen", {
            tituloDetalle: producto.nombre,
        });
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={arregloProductos}
                style={styles.FlatList}
                renderItem={(data) => (
                    <TouchableOpacity
                        style={styles.containerItem}
                        onPress={() => handlerProductoSeleccionado(data.item)}
                    >
                        <Text>{data.item.nombre}</Text>
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
        marginVertical: "2%",
        backgroundColor: "lightgreen",
        borderRadius: 10,
    },
});
