import React from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { categoriaSeleccionada } from "../../store/actions/CategoriaAction";

export function categoriaScreen(props) {
    const categorias = useSelector((state) => state.categorias.categorias);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handlerSelect = (item) => {
        dispatch(categoriaSeleccionada(item.id));
        navigation.navigate("ProductosScreen", {
            titulo: item.nombre,
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={categorias}
                style={styles.FlatList}
                renderItem={(data) => (
                    <TouchableOpacity
                        style={styles.containerItem}
                        onPress={() => handlerSelect(data.item)}
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
