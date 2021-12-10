import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import InputTexto from "../InputTexto/InputTexto";
export default function Pantalla() {
    const [numero, setNumero] = useState("");
    return (
        <View style={stylesPantalla.container}>
            <Text style={stylesPantalla.text}>Ingrese numero:</Text>
            <InputTexto numero={numero} setNumero={setNumero} />
        </View>
    );
}

const stylesPantalla = StyleSheet.create({
    container: {
        marginTop: "1%",
        height: "90%",
        width: "90%",
        alignItems: "center",
        borderColor: "gray",
        borderWidth: 1,
    },
});
