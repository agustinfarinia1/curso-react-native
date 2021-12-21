import React from "react";
import { Provider } from "react-redux";
import Pantalla from "./src/Components/Pantalla";
import store from "./src/store";

export default function App() {
    return (
        <Provider store={store}>
            <Pantalla />
        </Provider>
    );
}
