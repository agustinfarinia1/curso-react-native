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
import { auth, db } from "../firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { OrdenesScreen } from "./Screen/OrdenesScreen";
import { collection, getDocs } from "firebase/firestore/lite";
import { PerfilScreen } from "./Screen/PerfilScreen";

const TiendaStack = createNativeStackNavigator();
const CarritoStack = createNativeStackNavigator();
const OrdenesStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Pantalla() {
    const [user, setUser] = useState();
    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        if (user) {
            //Obtención de las orders, y luego filtrado mediante email
            (async () => {
                const querySnapshot = await getDocs(collection(db, "ordenes"));
                const ordersComplete = [];
                querySnapshot.forEach((doc) => {
                    //console.log(`${doc.id} => ${doc.data()}`);
                    ordersComplete.push({ id: doc.id, ...doc.data() });
                });
                const ordersFiltered = ordersComplete.filter(
                    (order) => order.comprador === auth.currentUser.email
                );
                //console.log(ordersComplete);
                setOrdenes([...ordersFiltered]);
            })();
        }
    }, [user]);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            //console.log(user);
            setUser(user);
        } else {
            setUser(null);
        }
    });

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setOrders([]);
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
        return null;
    };

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
                screenOptions={{
                    headerStyle: { backgroundColor: "lightblue" },
                }}
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

    function ordenesStackRender() {
        return (
            <OrdenesStack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "lightblue" },
                }}
            >
                <OrdenesStack.Screen
                    name="OrdenesScreen"
                    children={() => <OrdenesScreen ordenes={ordenes} />}
                    options={{
                        title: "MisOrdenes",
                    }}
                />
            </OrdenesStack.Navigator>
        );
    }

    function perfilStackRender() {
        return (
            <OrdenesStack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "lightblue" },
                }}
            >
                <OrdenesStack.Screen
                    name="PerfilScreen"
                    children={() => <PerfilScreen usuario={user} />}
                    options={{
                        title: "Perfil",
                    }}
                />
            </OrdenesStack.Navigator>
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
                            component={ordenesStackRender}
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
                            component={perfilStackRender}
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
