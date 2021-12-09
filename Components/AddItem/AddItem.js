import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
export default function AddItem(props) {
    const { setItem, agregarLista } = props;
    return (
        <View style={styles.containerInput}>
            <TextInput
                placeholder="Agrega Item..."
                onChangeText={(item) => setItem(item)}
                style={styles.input}
            />
            <Button title="Añadir" onPress={() => agregarLista()} />
        </View>
    );
}
const styles = StyleSheet.create({
    containerInput: {
        backgroundColor: "lightblue",
        flexDirection: "row",
        width: "90%",
        height: "10%",
        marginTop: "3%",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    input: {
        borderColor: "grey",
        borderWidth: 1,
        width: "70%",
        height: "50%",
    },
});
