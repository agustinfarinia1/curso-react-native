import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Productos } from "./Productos";
import { DetalleProducto } from "./DetalleProducto";
import { categoriasJson } from "../../data/categorias";

const Stack = createNativeStackNavigator();

export default function Pantalla() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Productos"
                    component={Productos}
                    options={{
                        title: "Productos",
                    }}
                    initialParams={{ categoriasJson: categoriasJson }}
                />
                <Stack.Screen
                    name="detalleProducto"
                    component={DetalleProducto}
                    options={({ route }) => ({ title: route.params.titulo })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
