import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    confirmarCarrito,
    removerItem,
    vaciarCarrito,
} from "../../store/actions/CarritoAction";
import { auth, db } from "../../firebase/database";
import { addDoc, collection } from "firebase/firestore/lite";
//import { cleanCart } from '../store/actions/cart.actions';

export default function CarritoScreen() {
    const carrito = useSelector((state) => state.carrito.carrito);
    const total = useSelector((state) => state.carrito.total);
    const dispatch = useDispatch();

    const handlerRemoverCarrito = (item) => {
        dispatch(removerItem(item.id));
    };

    const handlerConfirmarCarrito = async () => {
        const user = auth.currentUser;
        const orden = {
            productos: [...carrito],
            comprador: user.email,
            precioTotal: total,
            fecha: new Date().toLocaleString(),
        };

        //console.log(orden);
        try {
            const docRef = await addDoc(collection(db, "ordenes"), orden);
            //console.log("Document written with ID: ", docRef.id);
            dispatch(vaciarCarrito());
        } catch (e) {
            console.error("Error adding document: ", e.message);
        }
    };

    return (
        <View style={styles.container}>
            {carrito.length ? (
                <>
                    <FlatList
                        data={carrito}
                        style={styles.FlatList}
                        renderItem={(data) => (
                            <View>
                                <View style={styles.contenedorRow}>
                                    <Text>{data.item.nombre}</Text>
                                    <Text>Cantidad: {data.item.cantidad}</Text>
                                    <Text>{data.item.precio}</Text>
                                </View>
                                {
                                    <Button
                                        title="removerCarrito"
                                        onPress={() =>
                                            handlerRemoverCarrito(data.item)
                                        }
                                    />
                                }
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                    <View style={styles.contenedorRow}>
                        <Text>Total:{total}</Text>

                        <Button
                            title="ConfirmarCarrito"
                            onPress={handlerConfirmarCarrito}
                        />
                    </View>
                </>
            ) : (
                <>
                    <Text style={styles.text}>
                        No hay productos en el carrito
                    </Text>
                </>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    FlatList: {
        width: "90%",
        height: "90%",
        marginTop: "1%",
        borderColor: "grey",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 10,
    },
    containerItem: {
        width: "90%",
        height: 60,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "2%",
        backgroundColor: "lightgreen",
        borderRadius: 10,
    },
});
