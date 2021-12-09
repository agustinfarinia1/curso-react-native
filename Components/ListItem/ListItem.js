import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Button, StyleSheet } from "react-native";

export default function ListItem(props) {
    const { lista, borrarItem } = props;
    const [isRender, setIsRender] = useState(false);

    const itemHecho = (item) => {
        item.state = true;
        console.log(item);
        setIsRender(!isRender);
    };
    return (
        <>
            {lista.length > 0 ? (
                <FlatList
                    style={styles.container}
                    data={lista}
                    renderItem={(data) => (
                        <View style={styles.containerItem}>
                            <Text
                                style={
                                    data.item.state
                                        ? styles.itemHecho
                                        : styles.item
                                }
                            >
                                {data.item.value}
                            </Text>
                            <Button
                                onPress={() => itemHecho(data.item)}
                                title="H"
                            />

                            <Button
                                onPress={() => borrarItem(data.item.id)}
                                title="B"
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    extraData={isRender}
                />
            ) : (
                <Text> No hay Tareas </Text>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginTop: "1%",
        borderColor: "grey",
        borderWidth: 1,
    },
    containerItem: {
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: "3%",
        backgroundColor: "lightblue",
    },
    itemHecho: {
        width: "80%",
        textDecorationLine: "line-through",
        color: "gray",
    },
    item: {
        width: "80%",
    },
});
