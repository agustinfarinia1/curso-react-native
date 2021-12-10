import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Inicio({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Esto es la pantalla de inicio</Text>
            <Button
                title="Ir a Informacion"
                onPress={() => navigation.navigate("Informacion")}
            />
        </View>
    );
}
function Informacion() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Esto es Informacion</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function Pantalla() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Informacion" component={Informacion} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
