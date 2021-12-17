import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Productos } from "./Productos";
import { categoriasJson } from "../../data/categorias";
import { DetalleCategoria } from "./DetalleCategoria";
import { DetalleProducto } from "./DetalleProducto";
import CarritoScreen from "./CarritoScreen";
import { StyleSheet, Text, View } from "react-native";

const TiendaStack = createNativeStackNavigator();
const CarritoStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function tiendaStackRender() {
    return (
        <TiendaStack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
        >
            <TiendaStack.Screen
                name="Productos"
                component={Productos}
                options={{
                    title: "Productos",
                }}
                initialParams={{ categoriasJson: categoriasJson }}
            />
            <TiendaStack.Screen
                name="DetalleCategoria"
                component={DetalleCategoria}
                options={({ route }) => ({ title: route.params.titulo })}
            />
            <TiendaStack.Screen
                name="DetalleProducto"
                component={DetalleProducto}
                options={({ route }) => ({
                    title: route.params.tituloDetalle,
                })}
            />
        </TiendaStack.Navigator>
    );
}

function carritoStackRender() {
    return (
        <CarritoStack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
        >
            <CarritoStack.Screen
                name="CarritoScreen"
                component={CarritoScreen}
            />
        </CarritoStack.Navigator>
    );
}

export default function Pantalla() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false, tabBarShowLabel: false }}
            >
                <Tab.Screen
                    name="Tienda"
                    component={tiendaStackRender}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.container}>
                                <Ionicons
                                    name="basket"
                                    size={24}
                                    color={focused ? "blue" : "black"}
                                />
                                <Text>Tienda</Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Carrito"
                    component={carritoStackRender}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.container}>
                                <Ionicons
                                    name="cart"
                                    size={24}
                                    color={focused ? "blue" : "black"}
                                />
                                <Text>Carrito</Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
});
