import { Route, Routes } from "react-router-dom";
import "./App.css";

import localForage from "localforage";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";
import GestionPaquetes from "./pages/GestionPaquetes";

import Layout from "./components/Layout";
import PageFormulario from "./pages/PageFormulario";
import NavBar from "./components/NavBar";

function App() {
    const paquetes = [
        {
            id: 1,
            nombre: "Carolina",
            apellido: "Martinez",
            direccion: "Av Brasil 345 - Jujuy",
            peso: "10",
            cp: "4612",
        },
        {
            id: 2,
            nombre: "María",
            apellido: "Mamani",
            direccion: "Av Fascio 3453",
            peso: "12",
            cp: "4612",
        },
        {
            id: 3,
            nombre: "Lucas",
            apellido: "Gomez",
            direccion: "Av Alte. Brown 444 - Jujuy",
            peso: "40",
            cp: "4612",
        },
    ];

    localForage.setItem("paquetes", paquetes);

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/gestion-paquetes" element={<GestionPaquetes />} />
                <Route path="/formulario" element={<PageFormulario />} />
                <Route path="/formulario/:id" element={<PageFormulario />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
