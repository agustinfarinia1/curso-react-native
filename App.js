import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import AddItem from "./Components/AddItem/AddItem";
import ListItem from "./Components/ListItem/ListItem";

export default function App() {
    const [id, setId] = useState(0);
    const [item, setItem] = useState("");
    const [lista, setLista] = useState([]);

    const agregarLista = () => {
        agregarItem(item);
    };

    const agregarItem = (item) => {
        setLista([
            ...lista,
            {
                id: `${item}${id}`,
                value: item,
                state: false,
            },
        ]);
        setId(id + 1);
    };

    const borrarItem = (idItem) => {
        setLista(lista.filter((item) => item.id !== idItem));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Ingrese elementos:</Text>
            <AddItem setItem={setItem} agregarLista={agregarLista} />
            <ListItem lista={lista} borrarItem={borrarItem} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        alignItems: "center",
        paddingTop: "5%",
    },
});
