import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Pantalla from "./src/Components/Pantalla/Pantalla";
import Titulo from "./src/Components/Titulo/Titulo";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Titulo style={styles.titulo} />
                <View style={styles.containerPantalla}>
                    <Pantalla />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "red",
    },
    titulo: {
        backgroundColor: "red",
    },
    containerPantalla: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
    },
});
