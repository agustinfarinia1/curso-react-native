import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/database";

export function Registro() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPass: "",
    });
    const [error, setError] = useState("");

    const handlePress = () => {
        // alert(`Email: ${form.email}, password: ${form.password}`);
        console.log();
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                //Generamos el diplayName y le asignamos el username
                updateProfile(auth.currentUser, {
                    displayName: form.username,
                })
                    .catch((error) => setError(error))
                    .finally(() => {
                        alert("Usuario creado!");
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                //alert(errorMessage);
                setError({ error });
                // ..
            });
    };
    //console.log(form);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre usuario"
                blurOnSubmit={true}
                onChangeText={(text) => setForm({ ...form, username: text })}
                value={form.username}
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                secureTextEntry={true}
                onChangeText={(text) => setForm({ ...form, confirmPass: text })}
                value={form.confirmPass}
            />
            {error !== "" && <Text>{error.error.message}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => handlePress()}
            >
                <Text style={styles.textButton}>Registrarse</Text>
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
