import { useState } from "react";
import FormularioPaquete from "../components/FormularioPaquete";
import TablePaquetes from "../components/TablePaquetes";

const paquetes = [
    {
        id : 1,
        nombre: "Carolina",
        apellido: "Martinez",
        direccion: "Av Brasil 345 - Jujuy",
        peso: "10",
        cp: "4612",
    },
    {
        id : 2,
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

const GestionPaquetes = () => {
    const [paquetesData, setPaquetesData] = useState(paquetes);

    const [paquete, setPaquete] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        peso: "",
        cp: "",
    });

    const removePaquete = (index) => {
        setPaquetesData(
            paquetesData.filter((p, i) => {
                return i !== index;
            })
        );
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="md:flex">
                <FormularioPaquete paquete={paquete} setPaquete={setPaquete} paquetesData={paquetesData} setPaquetesData={setPaquetesData} />
                <TablePaquetes
                    paquetesData={paquetesData}
                    removePaquete={removePaquete}
                    setPaquete={setPaquete}
                />
            </div>
        </div>
    );
};

export default GestionPaquetes;
