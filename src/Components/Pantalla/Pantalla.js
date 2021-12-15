import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Productos } from "./Productos";
import { categoriasJson } from "../../data/categorias";
import { DetalleCategoria } from "./DetalleCategoria";
import { DetalleProducto } from "./DetalleProducto";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();

export default function Pantalla() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Pagina Principal",
                    }}
                />
                <Stack.Screen
                    name="Productos"
                    component={Productos}
                    options={{
                        title: "Productos",
                    }}
                    initialParams={{ categoriasJson: categoriasJson }}
                />
                <Stack.Screen
                    name="DetalleCategoria"
                    component={DetalleCategoria}
                    options={({ route }) => ({ title: route.params.titulo })}
                />
                <Stack.Screen
                    name="DetalleProducto"
                    component={DetalleProducto}
                    options={({ route }) => ({
                        title: route.params.tituloDetalle,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
