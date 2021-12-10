import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
export default function InputTexto(props) {
    const validarNumero = (numero) => {
        props.setNumero(numero.replace(/[^0-9]/g, ""));
    };
    const vaciarInput = () => {
        props.setNumero("");
    };
    const confirmarNumero = (numero) => {
        console.log(numero);
    };
    return (
        <View style={stylesInput.containerInput}>
            <TextInput
                style={stylesInput.input}
                keyboardType="numeric"
                placeholder="Ingrese numero..."
                onChangeText={validarNumero}
                maxLength={2}
                value={props.numero}
            ></TextInput>
            <View style={stylesInput.containerButton}>
                <Button onPress={() => vaciarInput()} title="Vaciar"></Button>
                <Button
                    onPress={() => confirmarNumero(props.numero)}
                    title="Confirmar"
                ></Button>
            </View>
        </View>
    );
}

const stylesInput = StyleSheet.create({
    containerInput: {
        marginTop: "1%",
        backgroundColor: "white",
        height: "5%",
        width: "100%",
        alignItems: "center",
    },
    input: {
        borderColor: "grey",
        borderWidth: 1,
        height: "100%",
        width: "50%",
    },
    containerButton: {
        width: "60%",
        marginTop: "1%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
