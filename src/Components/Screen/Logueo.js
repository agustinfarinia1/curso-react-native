import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/database";

export function Logueo() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleLogueo = () => {
        signInWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                const user = userCredential.user;
                //console.log(userCredential);
            })
            .catch((error) => {
                //console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                blurOnSubmit={true}
                textContentType="emailAddress"
                onChangeText={(text) => setForm({ ...form, email: text })}
                value={form.email}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={(text) => setForm({ ...form, password: text })}
                value={form.password}
            />
            {error !== "" && <Text>{error}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogueo()}
            >
                <Text style={styles.textButton}>Loguearse</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        padding: 10,
        width: "80%",
        borderWidth: 2,
        marginVertical: 4,
    },
    button: {
        marginTop: 30,
        padding: 10,
        width: "40%",
        backgroundColor: "lightblue",
        justifyContent: "center",
        borderRadius: 5,
        textAlign: "center",
        height: 80,
    },
    textButton: {
        fontSize: 20,
        color: "#212121",
    },
});
