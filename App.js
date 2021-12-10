import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Pantalla from "./src/Components/Pantalla/Pantalla";

export default function App() {
    return (
        <View style={styles.container}>
            <Pantalla />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
});
