import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { categoriaScreen } from "./Screen/CategoriaScreen";
import { productoScreen } from "./Screen/ProductosScreen";
import { detalleProducto } from "./Screen/DetalleProductoScreen";
import CarritoScreen from "./Screen/CarritoScreen";
import { Registro } from "./Screen/Registro";
import { Logueo } from "./Screen/Logueo";
import { auth } from "../firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";

const TiendaStack = createNativeStackNavigator();
const CarritoStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Pantalla() {
    const [user, setUser] = useState();
    //const [orders, setOrders] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(user);
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                //setOrders([]);
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
        return null;
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                }}
            >
                {user ? (
                    <>
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
                        <Tab.Screen
                            name="Ordenes"
                            component={carritoStackRender}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={styles.container}>
                                        <Ionicons
                                            name="list"
                                            size={24}
                                            color={focused ? "blue" : "black"}
                                        />
                                        <Text>Ordenes</Text>
                                    </View>
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Perfil"
                            component={tiendaStackRender}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={styles.container}>
                                        <Ionicons
                                            name="person"
                                            size={24}
                                            color={focused ? "blue" : "black"}
                                        />
                                        <Text>Perfil</Text>
                                    </View>
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Logout"
                            component={handleSignOut}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={styles.container}>
                                        <Ionicons
                                            name="log-out"
                                            size={24}
                                            color="black"
                                        />
                                        <Text>LogOut</Text>
                                    </View>
                                ),
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Tab.Screen
                            name="Registrarse"
                            component={Registro}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={styles.container}>
                                        <Ionicons
                                            name="add"
                                            size={24}
                                            color={focused ? "blue" : "black"}
                                        />
                                        <Text>Registro</Text>
                                    </View>
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Logueo"
                            component={Logueo}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={styles.container}>
                                        <Ionicons
                                            name="log-in"
                                            size={24}
                                            color={focused ? "blue" : "black"}
                                        />
                                        <Text>Logueo</Text>
                                    </View>
                                ),
                            }}
                        />
                    </>
                )}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function tiendaStackRender() {
    return (
        <TiendaStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "lightblue",
                },
            }}
        >
            <TiendaStack.Screen
                name="CategoriasScreen"
                component={categoriaScreen}
                options={{
                    title: "Productos",
                }}
            />
            <TiendaStack.Screen
                name="ProductosScreen"
                component={productoScreen}
                options={({ route }) => ({ title: route.params.titulo })}
            />
            <TiendaStack.Screen
                name="DetalleProductoScreen"
                component={detalleProducto}
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

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    logOut: {
        marginRight: 15,
    },
});
