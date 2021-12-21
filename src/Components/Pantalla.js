import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { CategoriaPanes } from "./Pantalla/CategoriaPanes";
import { Panes } from "./Pantalla/Panes";
import { DetalleProducto } from "./Pantalla/DetalleProducto";
import CarritoScreen from "./Pantalla/CarritoScreen";

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
                component={CategoriaPanes}
                options={{
                    title: "Productos",
                }}
            />
            <TiendaStack.Screen
                name="DetalleCategoria"
                component={Panes}
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
                options={{
                    title: "Carrito",
                }}
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
