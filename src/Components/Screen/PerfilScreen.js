import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export function PerfilScreen({ usuario }) {
    const handlerAgregarFoto = () => {
        console.log("Agregar foto");
    };

    const handlerAgregarUbicacion = () => {
        console.log("Agregar ubicacion");
    };
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Text>Nombre:{usuario.displayName}</Text>
                <Text>Email:{usuario.email}</Text>
            </View>
            <Button title="AgregarFoto" onPress={() => handlerAgregarFoto()} />
            <Button
                title="AgregarUbicacion"
                onPress={() => handlerAgregarUbicacion()}
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
