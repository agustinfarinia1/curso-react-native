import React from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Productos(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={props.route.params.categoriasJson}
                style={styles.FlatList}
                renderItem={(data) => (
                    <TouchableOpacity
                        style={styles.containerItem}
                        onPress={() =>
                            navigation.navigate("DetalleCategoria", {
                                categoria: data.item.id,
                                titulo: data.item.nombre,
                            })
                        }
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
        marginVertical: "5%",
        backgroundColor: "lightgreen",
        borderRadius: 10,
    },
});
